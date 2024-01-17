// slice формирует state(внем хранятся данные автоизации), редьюсеры
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";

// получение токена авторизации

export const fetchAccesToken = createAsyncThunk(
   'auth/fetchAccesToken',
    async() => {
      const response = await fetch(`${API_URL}api/users/accessKey`);
      
      if(!response.ok){
         throw new Error('Не удалось получить токен')
      }

      const data = await response.json();
      return data.accessKey;
   }
)



const authSlice = createSlice({
   name: 'auth',           // нвзвание сами придумали
   initialState: {               // state, нач значения полей
      accessToken: localStorage.getItem('accessToken') || null,
      loading: false,               // загрузка ключа accessToken
      error: null,
   },
   reducers: {
      removeToken(state){  // редьюсер
         state.accessToken = null;
         localStorage.removeItem('accessToken')
      }
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchAccesToken.pending, (state) => {  // когда  ожидаем ответ от сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchAccesToken.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.accessToken = action.payload;          // в  action.payload хранится то, что вернут в функции fetchAccesToken
            localStorage.setItem('accessToken', state.accessToken);
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchAccesToken.rejected, (state, action) => {  // если сервер отклонил запрос
            state.loading =  false;
            state.error = action.error.message;
         })
   }
})

export const { removeToken } = authSlice.actions;      // actions это  authSlice.reducers

export default authSlice.reducer