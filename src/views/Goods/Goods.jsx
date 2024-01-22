import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchpPoducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";




// список товаров
export const Goods = () => {  
   
   const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние

   const [ searchParam ] = useSearchParams();                          // хук, нужен чтобы получить search парамтеры из урла, вернет массив, его деструтурируем
   // searchParam = {}

  
   const category = searchParam.get('category');               // получить значение searh-параметра  category
   const q = searchParam.get('q');                             // получить значение searh-параметра  q(для поиска)


   const { products, loading, error } = useSelector((state) => {  //
      //console.log('state.products ', state.products) //  {products: [{},{},{}], loading: false, error: null}
      return state.products;
   }); 
  

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchpPoducts), а внутри useEffect() можно 
      dispatch(fetchpPoducts({ category, q }));
   }, [ dispatch, category, q ]);  //  коллбэк каждый раз вызывается когда  меняется category, q.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  
  
   if(loading){  
      return <div> Загрузка товаров </div>
   }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  
   

   return 
      (
      <section className={s.products}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2> 
            
            { products.length ?
               <ul className={s.list}>
                  {
                     products.map((productItem) => (
                        <li key={productItem.id}>
                           <CardItem  {...productItem} /> {/* либо по старинке(недесутруктурируя) так: product={productItem} */}
                        </li>
                     )
                  )}
               </ul>
            :  <p> По вашему запросу ничего не найдено </p> 
            }
         </Container>
      </section>
   ) 

}