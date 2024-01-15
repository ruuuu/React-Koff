import { Container } from "../../views/Container/Container";
import s from "./Catalog.module.scss";


export const Catalog = ({ data }) => {

   console.log('data ', data)



   return (
      <nav className={s.catalog}>
         <Container className={s.container}>
            <ul className={s.list}>

               { data.map((item, i) => (
                     <li className={s.item} key={i}>
                           <a className={s.link} href={`/category?slug=${item}`}> {item} </a>
                     </li>
                     )
                  )            
               }
   
            </ul>
         </Container>
    </nav>
   )
}