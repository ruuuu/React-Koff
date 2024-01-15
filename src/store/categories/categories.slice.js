import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchСategories = createAsyncThunk(
   'categories/fetchСategories',
   async(_, thunkAPI) => {               // у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const response = await fetch('https://koff-api.vercel.app/api/productCategories', {
         headers: {
            'Authorization': `Bearer ${token}`
         }
     });
      
      if(!response.ok){
         throw new Error('Не удалось получить список категорий')
      }
      
      console.log('response.json() ' , response.json())

      return response.json();
   }
)




const categoriesSlice = createSlice({
   name: 'categories',
   initialState: {               // state, нач значения полей
      data: [],
      loading: false,               // загрузкас категорий с сервера  
      error: null,
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchСategories.pending, (state) => {  // когда  ожидаем ответот сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchСategories.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.data = action.payload;          // в  action.payload хранится то, что вернут в функции fetchСategories 
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchСategories.rejected, (state, action) => {
            state.loading =  false;
            state.error = action.error.message;
         })
   }
})





export default categoriesSlice.reducer