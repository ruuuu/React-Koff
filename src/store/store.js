// хранилище
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice';  // название authReducer  придумали


export const store =  configureStore({
   reducer: {
      auth: authReducer 
      
   }
})