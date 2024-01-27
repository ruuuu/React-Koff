import s from "./Cart.module.scss";
import { Container } from "../Container/Container";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartForm } from "../../components/CartForm/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchCart } from "../../store/cart/cart.slice.js";



// Корзина
export const Cart = () => {

   const dispatch = useDispatch()      
   
   const { products, totalPrice, totalCount, loadingFetch,  loadingAdd, loadingUpdate, loadingRemove, error } = useSelector((state) => {  //
      console.log('state.cart ', state.cart)   // { products, totalPrice, totalCount, loadingFetch,  loadingAdd, loadingUpdate, loadingRemove, error}
      return state.cart;
   }); 


   useEffect(() => {  
      dispatch(fetchCart());
     
   }, [ dispatch]); 
  

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
            <CartProducts products={products}  />
            <CartPlace totalPrice={totalPrice}  totalCount={totalCount} />
            <CartForm />
         </Container>
      </section>
   )

}