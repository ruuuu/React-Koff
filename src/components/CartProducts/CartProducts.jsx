import s from "./CartProducts.module.scss";



// карточка товара в Корзине

export const CartProducts = ({ products }) => {  // товары = [{},{},{} ]

   //{name, } = products

   return (

      <ul class={s.products}>
            { products.map((item) => (
               <li className={s.product} key={item.id}>
                     <img class={s.img} src="img/cart.jpg" alt="Кресло с подлокотниками" />
                     <h3 className={s.titleProduct}> Кресло с подлокотниками </h3>
                     <p className={s.price}> {data.price.toLocaleString()}&nbsp;Р </p>
                     <p className={s.article}> арт. 84348945757 </p>
                     <div className={s.productControl}>
                        <button className={s.productBtn}> - </button>
                        <p className={s.productCount}> 1 </p>
                        <button className={s.productBtn}> + </button>
                     </div>
               </li>
               )           
            ) }
      </ul>  
   )
}