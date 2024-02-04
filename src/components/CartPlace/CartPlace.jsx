import s from "./CartPlace.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchCart } from "../../store/cart/cart.slice.js";
import { declOfNum } from "../../helpers/declOfNum.js";





// правая часть в Корзине

export const CartPlace = ({ totalPrice, totalCount }) => {
   
   

   return (
      <div className={s.place}>
         <h3 className={s.subtitle}> Оформление </h3>
         <div className={s.placeInfo}>
            <p> {totalCount} {declOfNum(totalCount, ['товар', 'товара' , 'товаров'])} на сумму: </p>
            <p> {totalPrice} Р </p>  { /* .toLocaleString() */ }
         </div>
         <p className={s.placeDelivery}> Доставка 0 Р </p>
         <button className={s.placeBtn} type="submit" form="order"> Оформить заказ </button>    {/*  form="order", он нужен чтобы связать зту кнопку с формой  у котрой  id="order" */}
      </div>
   )
}