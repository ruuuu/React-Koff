import s from "./Goods.module.scss";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";




export const Goods = () => {  // будет {data}-пропс

   return (

      <section className={s.goods}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2>      {/*  для доступности нужен заголовок */}
            
            <ul className={s.list}>
               <li>
                  <CardItem />
               </li>
               <li>
                  <CardItem />
               </li>
               <li>
                  <CardItem />
               </li>
            </ul>
         </Container>
      </section>
   )
}