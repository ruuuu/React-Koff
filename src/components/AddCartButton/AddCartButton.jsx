import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductToCart, addProductToCart } from "../../store/cart/cart.slice";





export const AddCartButton = ({ className, id }) => {  // кнопка "В Корзину", id-id товара, добалвяемого в Корзину


   const dispatch = useDispatch();
   const products = useSelector((state)=> state.cart.products);   // [{}, {}, {}]

   const isCart = products.find((item) => item.id === id);


   const handlerCartClick = () => {
      if(isCart){  // если уже есть товар в Корзине
        dispatch(updateProductToCart({ productId: id, quantity: 1 })); 
        console.log('товар есть уже в корзине')
      }
      else{
         dispatch(addProductToCart({ productId: id, quantity: 1 })); 
      } 
   }

   


   return (
      <button className={className}  type="button"  id={id}  onClick={handlerCartClick}> 
         { isCart ? 'Убрать из корзины' : 'В корзину' }
      </button>
   )
}


