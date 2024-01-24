import { createSlice } from '@reduxjs/toolkit';


// список избранных товаров храним  в localStorage

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      favoriteList: localStorage.getItem('favorite')  ?  JSON.parse(localStorage.getItem('favorite')) : [], // если ключа нет, то будет [], в хранилщие массив из id (в json формате)
   },  
   reducers: {
         addToFavorite: (state, action) => {  // редьюсер
            console.log('action.payload in favorite ', action.payload);  // id товара
            state.favoriteList.push(action.payload);  
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList));          // в localStorage хрантся строки
         },
         removeFromFavorite: (state, action) => { // редьюсер
            state.favoriteList = state.favoriteList.filter((id) => id !== action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList));  
         },
      }
   }
)


export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer