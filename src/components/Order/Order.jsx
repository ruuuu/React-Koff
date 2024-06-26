import s from "./Order.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder, fetchOrder } from "../../store/order/order.slice";
import { useParams } from "react-router-dom";
import { Container } from "../../views/Container/Container";
import { fetchCart } from "../../store/cart/cart.slice";
import { Link } from "react-router-dom";




export const Order = () => {

   const { orderId } = useParams();  // вытаскиваем orderId из урла /order/:orderId
   const dispatch = useDispatch();   // нужен чтобы вызвать асинхронную функцию(fetchOrder)

   const { orderData, loading, error } = useSelector((state) => state.order);   // useSelector задает доступ к  state


   useEffect(() => {   // в компоненте нельзя вызвать асинхронную функию(fetchCart), а внутри useEffect() можно 
      dispatch(fetchCart());  
   }, [dispatch]);  // 


   useEffect(() => {   // в компоненте нельзя вызвать асинхронную функию(fetchOrder), а внутри useEffect() можно 
      dispatch(fetchOrder(orderId));  

      return () => {
         dispatch(clearOrder())
      }
   }, [dispatch, orderId]);  // всегда когда orderId менется, тогда будет вызыватья коллбэк



   if(!orderData){
      return <div> Заказ не наден </div>
   }

   if(loading ){  // пока загружается заказ
      return <div> Загрузка заказа  </div>
   }
  
   if(error){
      return <div> Ошибка заказа: { error }</div>
   }




   return (
      
      <section className={s.order}>
           <Container className={s.container}>
               <div className={s.content}>
                  <div className={s.header}>
                     <h2 className={s.title}> Заказ успешно размещен </h2>
                     <p className={s.price}> {orderData.totalPrice.toLocaleString()}&nbsp;₽ </p>
                  </div>
      
                  <p className={s.number}> №{orderData.id} </p>
      
                  <div className={s.tableWrapper}>
                     <h3 className={s.tableTitle}> Данные доставки </h3>
                     <table className={s.table}>
                        <tbody>
                           <tr className={s.row}>
                              <td className={s.field}> Получатель </td>
                              <td className={s.value}> {orderData.name} </td>
                           </tr>
                           <tr className={s.row}>
                              <td className={s.field}> Телефон </td>
                              <td className={s.value}> {orderData.phone} </td>
                           </tr>
                           <tr className={s.row}>
                              <td className={s.field}> E-mail </td>
                              <td className={s.value}> {orderData.email} </td>
                           </tr>
                           <tr className={s.row}>
                              <td className={s.field}> Адрес доставки </td>
                              <td className={s.value}> {orderData.address} </td>
                           </tr>
                           <tr className={s.row}>
                              <td className={s.field}> Способ оплаты </td>
                              <td className={s.value}> {orderData.paymentType} </td>
                           </tr>
                           <tr className={s.row}>
                              <td className={s.field}> Способ получения </td>
                              <td className={s.value}> {orderData.deliveryType} </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
      
                  <Link className={s.back} to="/"> На главную </Link> {/*  вместо <a></a> используем Link, чтобы не перезагружалась станица, вместо href ставим to */}
               </div>
           </Container>
      </section>
   )
}

