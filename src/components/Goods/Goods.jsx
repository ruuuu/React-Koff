import s from "./Goods.module.scss";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";




export const Goods = ({ goods }) => {  //  [{}, {}, {}]
   
   console.log('goods in Goods component ', goods)

   return (
      <section className={s.goods}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2>      {/*  для доступности нужен заголовок */}
            
            <ul className={s.list}>
               {
                  goods.map((product) => (
                     <li key={product.id}>
                        <CardItem product={product} />
                     </li>
                  )
               )}
            </ul>
         </Container>
      </section>
   )
}