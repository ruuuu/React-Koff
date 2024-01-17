import s from "./Goods.module.scss";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";



//                деструтурируем props 
export const Goods = ({ products }) => {  //  [{}, {}, {}]^
   
   console.log('products in Goods component ', products)

   return (
      <section className={s.products}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2>      {/*  для доступности нужен заголовок */}
            
            <ul className={s.list}>
               {
                  products.map((productItem) => (
                     <li key={productItem.id}>
                        <CardItem product={productItem} /> {/* либо десутруктурируя так: <CardItem {...productItem} /> */}
                     </li>
                  )
               )}
            </ul>
         </Container>
      </section>
   )
}