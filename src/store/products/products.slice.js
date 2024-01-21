import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

// получение списка товаров

export const fetchpPoducts = createAsyncThunk(
   'products/fetchpPoducts',
   async(_, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const response = await fetch(`${API_URL}api/products`, {  
         headers: {
            'Authorization': `Bearer ${token}`
         }
     });
      
      if(!response.ok){
         if(response.status === 401){
            return thunkAPI.rejectWithValue({  // этот объект это будет payload
               status: response.status,
               error: 'Не удалось получить список товаров'
            })
         }
         throw new Error('Не удалось получить список товаров')
      }
      
      //console.log('response.json() ' , response.json()) // [{},{},{}]

      return response.json(); // вернет промис
   }
)




const productsSlice = createSlice({
   name: 'products',
   initialState: {               // state, нач значения полей
      products: [],              // сюда будем заносить товары полученные с сервера
      loading: false,               // загрузка продуктов с сервера  
      error: null,
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchpPoducts.pending, (state) => {  // когда  ожидаем ответа от сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchpPoducts.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.products = action.payload;          // в  action.payload хранится то, что вернут в функции fetchGoods
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchpPoducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   }
})





export default productsSlice.reducer