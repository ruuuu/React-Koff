// компонент
import { Goods } from "../../components/Goods/Goods";
import { Catalog } from "../../components/Catalog/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchСategories } from "../../store/categories/categories.slice.js";
import { fetchGoods } from "../../store/goods/goods.slice.js";



export const Main = () => {

  const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние
  const { data: dataCategories, loading: loadingCategories, error: errorCategories } = useSelector((state)=> state.categories);  // задает доступ к state = {data, loading, error}, state.categories (из store.js). Переименовали data в dataCategories, loading в  loadingCategories

  // const { data: dataCategories, loading: loadingCategories, error: errorCategories} = useSelector((state) => {  //
  //   console.log('state.categories ', state.categories) //  { data: ['Тумбы', 'Диваны'], loading: false, error: null }
  //   return state.categories;
  // }); 


  const { goods, loading: loadingGoods, error: errorGoods} = useSelector((state) => {  //
    //console.log('state.goods ', state.goods) //  {goods: [{},{},{}], loading: false, error: null}
    return state.goods;
  }); 

  useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchСategories), а внутри useEffect() можно 
    dispatch(fetchСategories());
    dispatch(fetchGoods());
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
      <Goods  goods={goods} />
    </main>
  );
};
