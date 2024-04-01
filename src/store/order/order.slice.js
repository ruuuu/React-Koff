import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const.js";



// получение офрлменного товара:
export const fetchOrder = createAsyncThunk(
   'order/fetchOrder',
   //  либо  async(orderId, { getState, rejectWithValue }) // деструкрировали thunkAPI
   async(orderId, thunkAPI) => {               // первый парамтер не передаем(_), у thunkAPI есть метод getState() для получения state(из store.js), state нужен для получения token
      const state = thunkAPI.getState();                     // получили state
      console.log('state in order', state)
      
      const token = state.auth.accessToken;

      try{
         const response = await fetch(`${API_URL}api/orders/${orderId}`, {  
            headers: {
               Authorization: `Bearer ${token}`
            },
         });

         console.log('response ', response)

         if(!response.ok){
            throw new Error('Ошибка получения заказа')
         }

         const responseData = await response.json();     // без await вернет промис.  
         
         return responseData; 
      }
      catch(error){
         return thunkAPI.rejectWithValue(error.message);
      }
      
   }
)





const orderSlice = createSlice({
   name: 'order',                 // нзв стейта
   initialState: {               // state, нач значения полей
      orderData: null,              // сюда будем заносить заказ полученный  с сервера
      loading: false,               // сервер отдал ответ
      error: null,
   },
   reducers: {
     clearOrder: (state) => {  // после оформоения заказаб вызовется эта фукнция
         state.loading = false;
         state.error = null;
         state.orderData = null;
     }
   },
   extraReducers: (builder) => {  // три редьюсера:
      builder
         .addCase(fetchOrder.pending, (state) => {  // когда  ожидаем ответа от сервера, запускается коллбэк
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchOrder.fulfilled, (state, action) => {   // когда данные с сервера вернулись, запускается коллбэк
            state.orderData = action.payload;          // в  action.payload хранится то, что вернет функция fetchOrder
            state.loading = false;
            state.error = null;
         }) 
         .addCase(fetchOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
   }
})

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer