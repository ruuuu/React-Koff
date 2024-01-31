import s from "./CartProducts.module.scss";
import { API_URL } from "../../const";


// список товаров в Корзине

export const CartProducts = ({ products }) => {  // товары корзины [{},{},{} ]

   
   



   return (

      <ul class={s.products}>
            { products.map((item) => (
               <li className={s.product} key={item.id}>
                     <img class={s.img} src={`${API_URL}/${item.images[0]}`} alt={item.name} />
                     <h3 className={s.titleProduct}> {item.name} </h3>
                     <p className={s.price}> {item.price.toLocaleString()}&nbsp;Р </p>
                     <p className={s.article}> арт. {item.article} </p>
                     <div className={s.productControl}>
                        <button className={s.productBtn}> - </button>   {/*  onClick={} */}
                        <p className={s.productCount}> 1 </p>
                        <button className={s.productBtn}> + </button>  {/*  onClick={} */}
                     </div>
               </li>
               )           
            ) }
      </ul>  
   )
}