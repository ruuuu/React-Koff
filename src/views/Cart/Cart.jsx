import s from "./Cart.module.scss";
import { Container } from "../Container/Container";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartForm } from "../../components/CartForm/CartForm";
import { useSelector } from "react-redux";


// в папке views добавбляем  компоненты которые не дублируются

// Корзина
export const Cart = () => {

   const { products, totalPrice, totalCount, loadingFetch,  loadingAdd, loadingUpdate, loadingRemove, error } = useSelector((state) => {  //
      console.log('state.cart ', state.cart)   // { products, totalPrice, totalCount, loadingFetch,  loadingAdd, loadingUpdate, loadingRemove, error}
      return state.cart;
   }); 


   if(!totalCount){
      return (
         <section className={s.cart}>
            <Container className={s.container}>
               <h2 class={s.title}> Товаров в Корзине нет </h2>
            </Container>
         </section>
      )
   }


  
   if(loadingFetch){  // пока загружаются товары
      return <div> Загрузка товаров Корзины  </div>
    }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  



   return (
      <section className={s.cart}>
         <Container className={s.container}>
            <h2 class={s.title}> Корзина </h2>
            <CartProducts products={products}  />              {/*  список товаров */}
            <CartPlace totalPrice={totalPrice}  totalCount={totalCount} />
            <CartForm />
         </Container>
      </section>
   )

}