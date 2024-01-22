import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

// получение списка товаров

export const fetchpPoducts = createAsyncThunk(
   'products/fetchpPoducts',
   async(param, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), param = {}
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const queryParams = new URLSearchParams();
     
    
     if(param){  // объект { category: 'Стеллажи', q: null}
         for (const key in param) { 
            if(Object.hasOwnProperty.call(param, key) && param[key]){  
               queryParams.append(key, param[key]);
            }
         }
      }

     //console.log(queryParams + ' ') // category=%D0%A1%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B8 


     const response = await fetch(`${API_URL}api/products/${queryParams}`, {  
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