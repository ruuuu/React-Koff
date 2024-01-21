import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";


// получение карточки товара

export const fetchProduct = createAsyncThunk(
   'product/fetchProduct',
   async(productId, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const response = await fetch(`${API_URL}api/products/${productId}`, {  
         headers: {
            'Authorization': `Bearer ${token}`
         }
     });
     
      console.log('response from product with id', response);
      
      if(!response.ok){
         if(response.status === 401){
            return thunkAPI.rejectWithValue({  // этот объект это будет payload
               status: response.status,
               error: 'Не удалось получить инфу о товаре с id'
            })
         }
         throw new Error('Не удалось получить инфу о товаре с id')
      }
      
      //console.log('response.json() ' , response.json()) 

      return response.json(); // вернет промис
   }
)




const productSlice = createSlice({
   name: 'product',
   initialState: {               // state, нач значения полей
      data: null,              // сюда будем зановить товар полученный  с сервера
      loading: false,               // сервер отдал ответ
      error: null,
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchProduct.pending, (state) => {  // когда  ожидаем ответа от сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchProduct.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.data = action.payload;          // в  action.payload хранится то, что вернут в функции fetchpPoduct
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   }
})





export default productSlice.reducer