import s from "./CardItem.module.scss";
import { API_URL } from "../../const";
import { Link } from "react-router-dom";
import { FavoriteButon } from "../FavoriteButton/FavoriteButon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice";



// карточка товара  на странице товаров
export const CardItem = ({ name, images: [image], price, id }) => {  // деструкрируем product

   const dispatch = useDispatch();
   const cartList = useSelector((state)=> state.cart.products);  // список товаров Коризны [id, id]
   console.log('cartList from CardItem ', cartList)


   const isCart = cartList.includes(id);         // если id в массиве cartList
   


   const handlerCartClick = () => {
      if(isCart){
        // dispatch(updateProductToCart({ productId: id, quantity: 1 }));  // вызов редьюсера
        console.log('товар есть уже в корзине')
      }
      else{
         dispatch(addProductToCart({ productId: id, quantity: 1 }));  // вызов редьюсера
      }
      
   }

   
   

   return (

      <article className={s.card}>
         <Link className={`${s.link} ${s.linkimg}`}  to={`/product/${id}`}>
            <img className={s.img} src={`${API_URL}${image}`} alt={name} />
         </Link>

         <div className={s.info}>
            <h3 className={s.title}>
               <Link className={s.cardlink} to={`/product/${id}`}> {name} </Link>
            </h3> 
            <p className={s.price}> {price.toLocaleString()}&nbsp;Р </p> 
         </div>
                
         <button className={s.cardbtn}  onClick={handlerCartClick}> В корзину </button>

         <FavoriteButon className={s.btnfavorite}  id={id}  />
      </article>
   )

}