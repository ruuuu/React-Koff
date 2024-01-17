// хранилище состояний
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice';  // название authReducer  придумали
import categoryReducer from './categories/categories.slice'; // название categoryReducer  придумали
import productsReducer from './products/products.slice';


export const store =  configureStore({  // хранилище state-ов
   reducer: {
      auth: authReducer,
      categories: categoryReducer, 
      products: productsReducer,
   }
})