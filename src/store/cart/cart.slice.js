import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";


// получение товаров из Корзины
export const fetchCart = createAsyncThunk(
   'cart/fetchCart',
  //  либо  async(productData, { getState, rejectWithValue }) // деструкрировали thunkAPI
   async(_, thunkAPI) => {               // первый парамтер не передаем(_), у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
      const state = thunkAPI.getState();                     // получили state
     
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/cart`, {  
            headers: {
               'Authorization': `Bearer ${token}`
            }
         });

         if(!response.ok){
            throw new Error('Не удалось получить список товаров Корзины')
         }

         return await response.json(); // без await вернет промис.   { products: [ {id, article, quantity, productId, images: ['',''], name, price, characteristics: []}, {}, {} ],    totalPrice:0,    totalCount:0 }
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)




export const addProductToCart = createAsyncThunk(  
   'cart/addProductToCart',
   //  либо  async(productData, { getState, rejectWithValue }) 
   async(productData, thunkAPI) => {               
      const state = thunkAPI.getState();                  
     
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/cart/products`, {  
            headers: {
               "Content-Type": "application/json",
               'Authorization': `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify(productData),         // productData = { productId: id, quantity: n }
         });

         if(!response.ok){
            throw new Error('Не удалось добавить товар в  Корзину')
         }

         return await response.json();   // ответ: { product: {},  productCart: {poductId: 30, quantity: 1},  totalCount: 1,  message: "Товар добавлен в корзину"}
         
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)



export const removeProductFromCart = createAsyncThunk(
   'cart/removeProductFromCart ',
   //  либо  async(_, { getState, rejectWithValue })
   async(productId, thunkAPI) => {              
      const state = thunkAPI.getState();                    
     
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/cart/products/${productId}`, {  
            headers: {
               'Authorization': `Bearer ${token}`
            },
            method: "DELETE"
         });

         if(!response.ok){
            throw new Error('Не удалось удалить товар из Корзины')
         }

         return await response.json();  // вернет  {id, message, totalCount}
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)


export const updateProductToCart = createAsyncThunk(
   'cart/updateProductToCart ',
   //  либо  async(_, { getState, rejectWithValue })
   async(productData, thunkAPI) => {               
      const state = thunkAPI.getState();                   
     
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/cart/products`, {  
            headers: {
               "Content-Type": "application/json",
               'Authorization': `Bearer ${token}`
            },
            method: "PUT",
            body: JSON.stringify(productData),         // { productId: id, quantity: n }
         });

         if(!response.ok){
            throw new Error('Не удалось обновить товар в  Корзине')
         }

         return await response.json();  //  вернет  { productCart: {productId, quantity},  message,  totalCount} 
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)




const cartSlice = createSlice({
   name: 'cart',           // нзв стейта
   initialState: {               // state, нач значения полей
      products: [],                 // с сервера методом fetchCart придут эти 3 поля. products-[{},{}]- товары  Корзины
      totalPrice: 0,                
      totalCount: 0,
      loadingFetch: false,               // получени товаров с Корзины
      loadingAdd: false,                  // добавление товара в Коризну
      loadingUpdate: false,   
      loadingRemove: false,   
      error: null,
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  //редьюсеры
      builder 
         .addCase(fetchCart.pending, (state) => {  // когда  ожидаем ответот сервера, запускается коллбэк
            state.loadingFetch = true;
            state.error = null;
         })
         .addCase(fetchCart.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            console.log('action.payload in fetchCart', action.payload)
            state.products = action.payload.products;          // в  action.payload хранится то, что вернут в функции fetchСart (то что вернет сервер)
            state.totalPrice = action.payload.totalPrice; 
            state.totalCount = action.payload.totalCount; 
            state.loadingFetch = false;
            state.error = null;
         }) 
         .addCase(fetchCart.rejected, (state, action) => {
            state.loadingFetch = false;
            state.error = action.error.message;
         })

         //--------------- 
         .addCase(addProductToCart.pending, (state) => {  
            state.loadingAdd = true;
            state.error = null;
         })
         .addCase(addProductToCart.fulfilled, (state, action) => {  
            console.log('action.payload in addProductToCart', action.payload)  // ответ от сервера:  { product: {},  productCart: {productId: 30, quantity: 1},  totalCount: 1,  message: "Товар добавлен в корзину" }
            //                   деструктурируем action.payload.product
            state.products.push({...action.payload.product,  quantity: action.payload.productCart.quantity});         
            state.totalPrice = state.products.reduce((acc, item) => {
               return item.price * item.quantity + acc;
            }, 0);  // acc = 0
            state.totalCount = action.payload.totalCount;         
            state.loadingAdd = false;
            state.error = null;
         }) 
         .addCase(addProductToCart.rejected, (state, action) => {
            state.loadingAdd = false;
            state.error = action.error.message;
         }) 
         

         //-------------------
         .addCase(removeProductFromCart.pending, (state) => {  
            state.loadingRemove = true;
            state.error = null;
         })
         .addCase(removeProductFromCart.fulfilled, (state, action) => {  
            console.log('action.payload in remove from Cart ', action.payload) // {id, message, totalCount}
            state.products = state.products.filter((cartItem) => cartItem.id !== action.payload.id);    // action.payload.id это id удаляемого товара, с сервера приходит     
            state.totalCount = action.payload.totalCount; 
            state.totalPrice = state.products.reduce((acc, item) => {
               return item.price * item.quantity + acc;
            }, 0);  // acc = 0     
            state.loadingRemove = false;
            state.error = null;
         }) 
         .addCase(removeProductFromCart.rejected, (state, action) => {
            state.loadingRemove = false;
            state.error = action.error.message;
         }) 


         //---------------------
         .addCase(updateProductToCart.pending, (state) => {  
            state.loadingUpdate = true;
            state.error = null;
         })
         .addCase(updateProductToCart.fulfilled, (state, action) => {  
            console.log('action.payload in update Cart ', action.payload) // с сервера придет  { productCart: {productId, quantity},  message,  totalCount} 
            state.products = state.products.map((item) => {    
               if(item.id === action.payload.productCart.productId){
                  item.quantity = action.payload.productCart.quantity;
               }
               return item;
            });         
            state.totalPrice = state.products.reduce((acc, item) => {
               return item.price * item.quantity + acc;
            }, 0);  // acc = 0 
            state.totalCount = action.payload.totalCount;       
            state.loadingUpdate = false;
            state.error = null;
         }) 
         .addCase(updateProductToCart.rejected, (state, action) => {
            state.loadingUpdate = false;
            state.error = action.error.message;
         }) 
   }
})





export default cartSlice.reducer