import s from "./CardItem.module.scss";




// карточка товара
export const CardItem = () => { 

   return (

      <article className={s.card}>
         <a class="card__link card__link--img" href="/product/2">
            <img class="card__image" src="/img/cart.jpg" alt="Кресло с подлокотниками" />
         </a>

         <div class="card__info">
            <h3 class="card__title">
               <a class="card__link" href="/product/2"> Кресло с подлокотниками </a>
            </h3>
            <p class="card__price"> 5&nbsp;000&nbsp;Р </p>
         </div>
                
         <button class="card__btn"> В корзину </button>

         <button class="card__favorite">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </button>
      </article>
   )

}