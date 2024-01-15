import s from "./CardItem.module.scss";




// карточка товара
export const CardItem = ({ product }) => { 

   return (

      <article className={s.card}>
         <a className={`${s.link} ${s.linkimg}`}  href={`/product/${product.id}`}>
                                          {/* /img/cart.jpg  */}
            <img className={s.image} src={`https://koff-api.vercel.app/api/products/${product.images[0]}`} alt={product.name} />
         </a>

         <div className={s.info}>
            <h3 className={s.title}>
               <a className={s.cardlink} href={`/product/${product.id}`}> {product.name} </a>
            </h3> 
            <p className={s.price}> {`${product.price.toLocaleString()}&nbsp;Р`} </p> 
         </div>
                
         <button className={s.cardbtn}> В корзину </button>

         <button className={s.btnfavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" fill="white" stroke="#1C1C1C" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </button>
      </article>
   )

}