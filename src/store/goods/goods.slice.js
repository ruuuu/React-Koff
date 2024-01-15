import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// получение списка товаров

export const fetchGoods = createAsyncThunk(
   'goods/fetchGoods ',
   async(_, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const response = await fetch('https://koff-api.vercel.app/api/products', {  
         headers: {
            'Authorization': `Bearer ${token}`
         }
     });
      
      if(!response.ok){
         throw new Error('Не удалось получить список товаров')
      }
      
      //console.log('response.json() ' , response.json()) // [{},{},{}]

      return response.json(); // вернет промис
   }
)




const goodsSlice = createSlice({
   name: 'goods',
   initialState: {               // state, нач значения полей
      goods: [],
      loading: false,               // загрузкас категорий с сервера  
      error: null,
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchGoods.pending, (state) => {  // когда  ожидаем ответот сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGoods.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.goods = action.payload;          // в  action.payload хранится то, что вернут в функции fetchGoods
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchGoods.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   }
})





export default goodsSlice.reducer