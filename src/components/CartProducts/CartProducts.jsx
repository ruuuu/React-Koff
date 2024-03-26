import s from "./CartProducts.module.scss";
import { API_URL } from "../../const";
import { useDispatch } from "react-redux";
import { removeProductFromCart, updateProductToCart } from "../../store/cart/cart.slice";



// список товаров в Корзине

export const CartProducts = ({ products }) => {  // товары Корзины [{ id, images, quantity, name, price, article, productId },{},{} ]

   const dispatch = useDispatch()
   

   const handleMinus = (id, quantity) => {  // id товара Корзины

      if(quantity > 1){
        dispatch(updateProductToCart({ productId: id, quantity: quantity-1 })); // вернет { productCart: {productId, quantity},  message,  totalCount} 
      }
      else{
         dispatch(removeProductFromCart(id));
      }
   }



   const handlePlus = (id, quantity) => {
       
      dispatch(updateProductToCart({ productId: id, quantity: quantity+1 }));
   }



   return (

      <ul class={s.products}>
            {/* вместо item, можно деструтурировать его: { id, images: [image](только 1-ый элемент нам нужен), name, price, article, quantity, productId } */}
            { products.map(({ id, images: [image], name, price, article, quantity, productId }) => (
               <li className={s.product} key={productId}>
                     <img class={s.img}  src={`${API_URL}${image}`}  alt={name} />
                     <h3 className={s.titleProduct}> {name}  </h3>
                     <p className={s.price}> {price.toLocaleString()}&nbsp;Р </p>
                     <p className={s.article}> арт. {article} </p>
                     <div className={s.productControl}>
                     {/*                                          если просто handleMinus(productId, quantity), то отпрвится event:  */}
                        <button className={s.productBtn}  onClick={() => { handleMinus(productId, quantity) }}> - </button>  
                        <p className={s.productCount}> {quantity}  </p>
                        <button className={s.productBtn}  onClick={() => { handlePlus(productId, quantity) }}> + </button>  
                     </div>
               </li>
               ) 
             )          
            }
      </ul>  
   )
}