import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchpPoducts } from "../../store/products/products.slice";


//                деструтурируем props {data}
export const Goods = () => {  
   
   const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние

   const { products, loading, error} = useSelector((state) => {  //
      //console.log('state.products ', state.products) //  {products: [{},{},{}], loading: false, error: null}
      return state.products;
   }); 
  

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchpPoducts), а внутри useEffect() можно 
      dispatch(fetchpPoducts());
   }, [ dispatch ]);  // коллбэк вызывается когда  меняется data.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  
  
   if(loading){  // пока загружаются товары
      return <div> Загрузка товаров </div>
   }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  
   

   return (
      <section className={s.products}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2>      {/*  для доступности нужен заголовок */}
            
            <ul className={s.list}>
               {
                  products.map((productItem) => (
                     <li key={productItem.id}>
                        <CardItem  {...productItem} /> {/* либо по старинке недесутруктурируя так: product={productItem} */}
                     </li>
                  )
               )}
            </ul>
         </Container>
      </section>
   )
}