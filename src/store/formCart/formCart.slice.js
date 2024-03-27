// отправка формы закзаа
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";


// Отправка формы заказа(на странице Корзина)
export const submitCartForm = createAsyncThunk(
   'formCart/submitCartForm',
   //  либо  async(formData, { getState, rejectWithValue }) // деструкрировали thunkAPI
   async(formData, thunkAPI) => {               // первый парамтер не передаем(_), у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
      const state = thunkAPI.getState();                     // получили state
      console.log('state in formCart', state)
      
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/orders`, {  
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`
            },
            
            body: JSON.stringify(formData)
         });

         console.log('response ', response)

         if(!response.ok){
            throw new Error('Ошибка при отправке заказа')
         }

         const responseData = await response.json();     // без await вернет промис.  
         
         return responseData.orderId; 
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)






const formCartSlice = createSlice({
   name: 'formCart',           // нзв стейта
   initialState: {               // state, нач значения полей
      loading: false,
      error: null,
      success: false,
      orderId: null
   },
   reducers: {
      
   },
   extraReducers: (builder) => {  //редьюсеры
      builder 
         .addCase(submitCartForm.pending, (state) => {  // когда  ожидаем ответ от сервера, запускается коллбэк
            state.loading= true;
            state.error = null;
            state.success = false;
         })
         .addCase(submitCartForm.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.loading= false;
            state.error= null;
            state.success= true;
            state.orderId = action.payload;
         }) 
         .addCase(submitCartForm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
         })

   }
})





export default formCartSlice.reducer