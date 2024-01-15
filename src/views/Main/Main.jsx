// компонент
import { Goods } from "../../components/Goods/Goods";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchСategories } from "../../store/categories/categories.slice.js";
import { Catalog } from "../../components/Catalog/Catalog";



export const Main = () => {

  const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние
  const { data: dataCategories, loading: loadingCategories, error: errorCategories } = useSelector((state)=> state.categories);  // задает доступ к state = {data, loading, erroor},state.categories (из store.js). Переименовали data в dataCategories, loading в  loadingCategories

  // const { data, loading } = useSelector((state) => {  //
  //   console.log('state.categories ', state.categories)
  //   return state.categories;
  // }); 

  useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchСategories), а внутри useEffect() можно 
    dispatch(fetchСategories());
  }, [ dispatch ]);  // коллбэк вызывается когда  меняется data.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке


  if(loadingCategories){  // пока загружаются категории
    return <div> Загрузка категорий </div>
  }

  if(errorCategories){
    return <div> Ошибка: { errorCategories } </div>
  }



  return (
    <main>
      <Catalog  data={dataCategories} />
      <Goods />
    </main>
  );
};
