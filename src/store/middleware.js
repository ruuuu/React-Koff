import { fetchAccesToken } from "./auth/auth.slice";



export const apiTokenErrorMiddleware  = (store) => (next) => async(action) => {  // Middleware работа так: 1-ая фуния возвращает фукницю, next-это метод, 2-ая фукния принимет next и возвращает 3-ю функцию
   
   // action.payload?.status  если action.payload будет undefined, то оишбки не произойдет
   if(action.type.endsWith('rejected') && action.payload?.status === 401) {    // action.type = categories/fetchCategories/rejected
      const refreshAction = await store.dispatch(fetchAccesToken());
      console.log('refreshAction ', refreshAction)
 }   

}