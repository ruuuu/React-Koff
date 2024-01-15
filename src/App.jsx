import { Header } from "./views/Header/Header";
import { Footer } from "./views/Footer/Footer";
import { Main } from "./views/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchAccesToken } from './store/auth/auth.slice.js';



const App = () => {

  const dispatch = useDispatch()      // dispatch  нужен чтобы вызывать action, после обтрабоки  dispatch обновляется состояние
  const { accessToken, loading } = useSelector((state)=> state.auth);  // задает доступ к state = {accessToken, loading, error}, state.auth = {accessToken, error, loading} это auth из store.js


  // const { accessToken, loading } = useSelector((state)=> {  //
  //   console.log('state.auth ', state.auth)
  //   return state.auth;
  // }); 

  useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchAccesToken), а внутри useEffect() можно 
    if(!accessToken){
      dispatch(fetchAccesToken());
    }
    
  }, [ dispatch, accessToken ]);  // коллбэк вызывается когда  меняется accessToken(нарпимер стал null).  [] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке



  return (
    <>            {/* либо писать так <React.Fragment></React.Fragment> */}
      <Header />
      { !loading && accessToken  ? <Main /> : <div> загрузка </div> }
      <Footer />
    </>
  );
};

export default App;
