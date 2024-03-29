// хранилище состояний
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice';  // название authReducer  придумали
import categoryReducer from './categories/categories.slice'; // название categoryReducer  придумали
import productsReducer from './products/products.slice';
import productReducer from './product/product.slice';
import cartReducer from './cart/cart.slice';
import { apiTokenErrorMiddleware } from "./middleware";
import favoriteReducer from './favorite/favorite';
import formCartReducer from "./formCart/formCart.slice";
import orderReducer from "./order/order.slice";



export const store = configureStore({  // хранилище state-ов
   reducer: {
      auth: authReducer,
      categories: categoryReducer, 
      products: productsReducer,
      product: productReducer,
      favorite: favoriteReducer,
      cart: cartReducer,
      formCart: formCartReducer,
      order: orderReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiTokenErrorMiddleware),
   
})