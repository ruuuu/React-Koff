import { Header } from "./views/Header/Header";
import { Footer } from "./views/Footer/Footer";
import { Catalog } from "./views/Catalog/Catalog";
import { Goods } from "./views/Goods/Goods";
import { Card } from "./components/Card/Card";
import { Cart } from "./views/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchAccesToken } from './store/auth/auth.slice.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Order } from "./components/Order/Order";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";



// роутинг:
const router = createBrowserRouter([
  {
    path: "/",  // при переходе в корень, , отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",  // при переходе в /favorite, отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",   // при переходе в /category, отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",  // (Корзина) при переходе в /cart, отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Cart /> 
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",  // при переход на станицу товара , отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Card />  
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",  
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/order/:orderId",   // при пееходе на страница офрлменнного заказа, отображется все что в element
    element: (
      <>
        <Header />
        <main>
          <Order />
        </main>
        <Footer />
      </>
    ),
  },
]);







const App = () => {

  const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action(редьюсер), после отработки  dispatch, обновляется state
  const { accessToken, loading } = useSelector((state) => state.auth);  // задает доступ к state = {accessToken, loading, error}, state.auth = {accessToken, error, loading} это auth из store.js


  // const { accessToken, loading } = useSelector((state)=> {  //
  //   console.log('state.auth ', state.auth)
  //   return state.auth;
  // }); 

  useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchAccesToken), а внутри useEffect() можно 
    if(!accessToken){
      dispatch(fetchAccesToken());

    }
  }, [ dispatch, accessToken ]);  // коллбэк вызывается каждый раз когда  меняется accessToken(нарпимер стал null).  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке


  if(loading){
    return <div>Загрузка...</div>
  }


  return (
    <RouterProvider router={router} />
  );
};


export default App;
