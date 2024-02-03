import s from "./CardItem.module.scss";
import { API_URL } from "../../const";
import { Link } from "react-router-dom";
import { FavoriteButon } from "../FavoriteButton/FavoriteButon";
import { AddCartButton } from "../addCartButton/addCartButton";





// карточка товара  на странице товаров
//                               images: [image] достает 1-ую картинку
export const CardItem = ({ name, images: [image], price, id }) => {  // деструкрируем product = { name, price, id, article, images:['',''], category, characteristics }


  
  
   
   

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
                
         <AddCartButton  className={s.btn} id={id} /> 
         <FavoriteButon className={s.btnfavorite}  id={id}  />
      </article>
   )

}