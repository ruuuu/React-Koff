import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchСategories } from "../../store/categories/categories.slice.js";
import { Link } from "react-router-dom";



export const Catalog = () => {

   
   const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние
   const { data, loading, error } = useSelector((state)=> state.categories);  // задает доступ к state = {data, loading, error}, state.categories (из store.js). Переименовали data в dataCategories, loading в  loadingCategories
   
   // const { data: dataCategories, loading: loadingCategories, error: errorCategories} = useSelector((state) => {  //
   //    console.log('state.categories ', state.categories) //  { data: ['Тумбы', 'Диваны'], loading: false, error: null }
   //    return state.categories;
   // }); 

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchСategories), а внутри useEffect() можно 
      dispatch(fetchСategories());
     
    }, [ dispatch ]);  // коллбэк вызывается когда  меняется data.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  

   if(loading ){  // пока загружаются категории
      return <div> Загрузка категорий  </div>
    }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  
   
  
   return (
      <nav className={s.catalog}>
         <Container className={s.container}>
            <ul className={s.list}>

               { data.map((item, i) => (           // data=["Тумбы", "Стулья", "Столы"]
                     <li className={s.item} key={i}>
                        <Link className={s.link} to={`/category?category=${item}`}> {item} </Link>
                     </li>
                  )
               )}
   
            </ul>
         </Container>
    </nav>
   )
}