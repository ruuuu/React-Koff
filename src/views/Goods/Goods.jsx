import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { Pagination } from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams, useLocation } from "react-router-dom";




// список товаров
export const Goods = () => {  
   
   const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние

   const { data, loading, error, pagination } = useSelector((state) => {  
      console.log('state.products ', state.products)  
      return state.products;  // { data: [{},{},{}],  loading: true,  error: null,  pagination: {currentPage: 1, totalPages: 2, totalProducts: 19, limit: 12} }
   }); 

   const { pathname } = useLocation()           // хук, позволяет опреелить по какому урлу сейчас находимся. Вернет объект, нам нужно только свойство pathname 
   //console.log('useLocation() ', useLocation());   // { pathname: '/favorite', search: '', hash: '', state: null, key: 'a30bbug2' }
   

   const [ searchParam ] = useSearchParams();                          // хук, нужен чтобы получить search парамтеры из урла, вернет массив, его деструтурируем
   // searchParam это  {}
   
   
   const category = searchParam.get('category');               // получить значение search-параметра  category
   const q = searchParam.get('q');                             // получить значение search-параметра  q(для поиска)
   const page = searchParam.get('page'); 
   
   

   const favoriteList = useSelector((state) => {  
      console.log('state.favorite ', state.favorite) //  
      return state.favorite.favoriteList;  // [id, id, id]
   }); 




   useEffect(() => {                                  // в компоненте нельзя вызвать асинхронную функию(fetchpPoducts), а внутри useEffect() можно 
      
      if(pathname !== '/favorite'){
         console.log('меня вызвали')
         dispatch(fetchProducts({ category, q, page }));
      }
   }, [ dispatch, category, q, pathname, page ]);                                   //  коллбэк каждый раз вызывается когда  меняется category или q или  pathname.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  


   useEffect(() => {  
      
      if(pathname === '/favorite'){
         console.log('меня еще раз вызвали')
         dispatch(fetchProducts({ list: favoriteList.join(','), page }));                     // favoriteList переименовали в list(сервер принимает), favoriteList.join(',') - из массива создали строку 'id, id, id'
      }
   }, [ dispatch,  favoriteList,  pathname,  page ]);        // коллбэк зависит от favoriteList,  pathname. Когда они меняются, колллбэк вызвется
  
  

   if(loading){  
      return <div> Загрузка товаров </div>
   }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }
  
   

   return (
      <section className={s.products}>
         <Container>
            <h2 className={`${s.title} visually-hidden`}> Список товаров </h2> 
            
            { data.length ? (
                <>                  {/* когд вставляем несколько элементов, то добавляем ReactFragment <> </>  */}
                  <ul className={s.list}>
                     {
                        data.map((productItem) => (
                           <li key={productItem.id}>
                              <CardItem  {...productItem} /> {/* либо по старинке(недеструктурируя) так: product={productItem} */}
                           </li>
                        )
                     )}
                  </ul>
                  { pagination ?  <Pagination  pagination={pagination}  />  : "" } 
               </>
            ) : ( <p> По вашему запросу ничего не найдено </p> ) 
            }
         </Container>
      </section>
   ) 

}