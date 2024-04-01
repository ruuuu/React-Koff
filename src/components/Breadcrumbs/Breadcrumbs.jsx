import { Link, useSearchParams } from "react-router-dom";
import s from "./Breadcrumbs.module.scss";
import { useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";


// в папке components добавляем переиспользуемые компоненты

// отрисовка хлеб крошики
export const Breadcrumbs = () => {

   const [ searchParam ] =  useSearchParams(); // хук нужен чтобы получить search парамтеры(categpry) из урла(http://localhost:5173/category?category=банкетки)
   const category = searchParam.get('category'); // получаем значения параметра category

   const data = useSelector((state) => state.product.data);

   if(category || data?.category){  // data?.category если есть свойство category, это если перешли на страницу продукта
      <div className={s.breadcrumbs}>
         <Container>
            <ul className={s.list}>
               <li className={s.item}>
                  <Link to='/'> Главная </Link>
                  <span className={s.separator}>&gt;</span>        {/* разделитель -> */}
               </li>
               <li className={s.item}>
                  <Link to={`category?category=${category || data?.category}`}> 
                     {category || data?.category} 
                  </Link>
                  <span className={s.separator}>&gt;</span>        
               </li>

               {data?.name && (        // если у data есть свойство nameб то рисуем li
                  <li className={s.item}>
                     <a> {data?.name} </a>
                     <span className={s.separator}>&gt;</span>        
                  </li>
               )}
            </ul>
         </Container>
      </div>
   }
}


