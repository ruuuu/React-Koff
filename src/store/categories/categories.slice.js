import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";


// получение списка категорий

export const fetchСategories = createAsyncThunk(
   'categories/fetchСategories',
   async(_, thunkAPI) => {               // первый парамтер не передаем(_), у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
     const state = thunkAPI.getState();                     // получили state
     
     const token = state.auth.accessToken;

     const response = await fetch(`${API_URL}api/productCategories`, {  
         headers: {
            'Authorization': `Bearer ${token}`
         }
     });
      
      if(!response.ok){
         if(response.status === 401){  // если токен авторизации протух
            return thunkAPI.rejectWithValue({  // этот объект это будет payload
               status: response.status,
               error: 'Не удалось получить список категорий'
            })
         }
         throw new Error('Не удалось получить список категорий')
      }
      
      //console.log('response.json() ' , response.json()) // ["Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"]

      return response.json(); // вернет промис
   }
)




const categoriesSlice = createSlice({
   name: 'categories',           // нзв стейта
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
            state.data = action.payload;          // в  action.payload хранится то, что вернут в функции fetchСategories (то что вернет сервер)
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchСategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   }
})





export default categoriesSlice.reducer