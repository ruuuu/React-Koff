// хранилище состояний
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice';  // название authReducer  придумали
import categoryReducer from './categories/categories.slice'; // название categoryReducer  придумали


export const store =  configureStore({  // хранилище state-ов
   reducer: {
      auth: authReducer,
      categories: categoryReducer, 
   }
})