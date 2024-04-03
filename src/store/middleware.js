import { fetchAccesToken } from "./auth/auth.slice";


//                                    storeApi
export const apiTokenErrorMiddleware  = (store) => (next) => async(action) => {  // Middleware работа так: 1-ая фуния возвращает фукницю, next-это фукнция, 2-ая фукния принимет next и возвращает 3-ю функцию
   //console.log(store) // { dispatch(), getState() }
   // console.log(store.getState()) // { auth: {accessToken, loding, error}, categories: {data, loading, error} }
   // console.log(action)
   const state = store.getState();

   // action.payload?.status  если action.payload будет undefined, то оишбки не произойдет
   if(action.type.endsWith('rejected') && action.payload?.status === 401) {    // action.type = categories/fetchCategories/rejected
      if(!store.auth.loading){
         await store.dispatch(fetchAccesToken());  // отправка запроса на получение токена
      }
   }  
 
   next(action);

}