// компонент
// import { Goods } from "../../components/Goods/Goods";
// import { Catalog } from "../../components/Catalog/Catalog";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect} from "react";
// import { fetchСategories } from "../../store/categories/categories.slice.js";
// import { fetchpPoducts } from "../../store/products/products.slice.js";



// export const Main = () => {

  


//   const { products, loading: loadingProducts, error: errorProducts} = useSelector((state) => {  //
//     //console.log('state.products ', state.products) //  {products: [{},{},{}], loading: false, error: null}
//     return state.products;
//   }); 

//   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchСategories), а внутри useEffect() можно 
//     dispatch(fetchСategories());
//     dispatch(fetchpPoducts());
//   }, [ dispatch ]);  // коллбэк вызывается когда  меняется data.  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке


//   if(loadingCategories || loadingProducts){  // пока загружаются категории
//     return <div> Загрузка категорий  и товаров </div>
//   }

//   if(errorCategories){
//     return <div> Ошибка: { errorCategories }</div>
//   }

//   if(errorProducts){
//     return <div> Ошибка: { errorProducts }</div>
//   }


//   return (
//     <main>
//       <Catalog  data={dataCategories} />
//       <Goods  products={products} />
//     </main>
//   );
// };
