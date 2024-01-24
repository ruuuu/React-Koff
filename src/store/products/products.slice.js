import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

// получение списка товаров

export const fetchProducts = createAsyncThunk(
   'products/fetchPoducts',
   async(param, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), param = {}
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const queryParams = new URLSearchParams();
    

     console.log('param ', param)
    
     if(param){               // объект { category: 'Стеллажи',  q: null } или если '/favorite' то {list: '53,7,8'}
         for (const key in param) { 
            if(Object.hasOwnProperty.call(param, key) && param[key]){  
               queryParams.append(key, param[key]);
            }
         }
      }

      console.log('queryParams ', queryParams + ' ')

     //console.log(queryParams + ' ') // category=%D0%A1%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B8  или если '/favorite', то  list=53%2C7%2C8 


     const response = await fetch(`${API_URL}api/products?${queryParams}`, {    // если на странице /favorite, то products?list=53%2C7%2C8
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
      data: [],              // сюда будем заносить товары полученные с сервера
      loading: false,               // загрузка продуктов с сервера  
      error: null,
      pagination: null
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchProducts.pending, (state) => {  // когда  ожидаем ответа от сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
            state.pagination = null;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            if(Array.isArray(action.payload)){           // если с сервера пришел массив
               state.data = action.payload;          // в  action.payload хранится то, что вернут в функции fetchProducts
               state.pagination = null;
            }
            else{                                  // если придет объект { data: [], paginatin: {currentPage, totalPages, totalProducts, limit} } 
               state.data = action.payload.data;    // в  action.payload хранится то, что вернут в функции fetchProducts
               state.pagination = action.payload.pagination;
            }
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.pagination = null;
         })
   }
})





export default productsSlice.reducer