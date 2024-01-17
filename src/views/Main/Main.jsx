// компонент
import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchСategories } from "../../store/categories/categories.slice.js";
import { fetchpPoducts } from "../../store/products/products.slice.js";



export const Main = () => {

  const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние
  const { data: dataCategories, loading: loadingCategories, error: errorCategories } = useSelector((state)=> state.categories);  // задает доступ к state = {data, loading, error}, state.categories (из store.js). Переименовали data в dataCategories, loading в  loadingCategories

  // const { data: dataCategories, loading: loadingCategories, error: errorCategories} = useSelector((state) => {  //
  //   console.log('state.categories ', state.categories) //  { data: ['Тумбы', 'Диваны'], loading: false, error: null }
  //   return state.categories;
  // }); 


  const { products, loading: loadingProducts, error: errorProducts} = useSelector((state) => {  //
    //console.log('state.products ', state.products) //  {products: [{},{},{}], loading: false, error: null}
    return state.products;
  }); 

  useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchСategories), а внутри useEffect() можно 
    dispatch(fetchСategories());
    dispatch(fetchpPoducts());
  }, [ dispatch ]);  // коллбэк вызывается когда  меняется data.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке


  if(loadingCategories || loadingProducts){  // пока загружаются категории
    return <div> Загрузка категорий  и товаров </div>
  }

  if(errorCategories){
    return <div> Ошибка: { errorCategories }</div>
  }

  if(errorProducts){
    return <div> Ошибка: { errorProducts }</div>
  }



 
  return (
    <main>
      <Catalog  data={dataCategories} />
      <Goods  products={products} />
    </main>
  );
};
