import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";




// список товаров
export const Goods = () => {  
   
   const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние

   const [ searchParam ] = useSearchParams();                          // хук, нужен чтобы получить search парамтеры из урла, вернет массив, его деструтурируем
   // searchParam = {}

  
   const category = searchParam.get('category');               // получить значение searh-параметра  category
   const q = searchParam.get('q');                             // получить значение searh-параметра  q(для поиска)


   const { data, loading, error } = useSelector((state) => {  //
      console.log('state.products ', state.products) //  
      return state.products;  // { data: Array(1),  loading: true,  error: null,  pagination: null }
   }); 
  



   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchpPoducts), а внутри useEffect() можно 
      dispatch(fetchProducts({ category, q }));
   }, [ dispatch, category, q ]);  //  коллбэк каждый раз вызывается когда  меняется category или q.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  
  
   if(loading){  
      return <div> Загрузка товаров </div>
   }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  
   

   return (
      <section className={s.products}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2> 
            
            { data.length ?
               <ul className={s.list}>
                  {
                     data.map((productItem) => (
                        <li key={productItem.id}>
                           <CardItem  {...productItem} /> {/* либо по старинке(недеструктурируя) так: product={productItem} */}
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