import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ids: [],
}

export const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,

   reducers: {
      addFavorite: (state, action) => {
         state.ids.push(action.payload.id)
      },
      removeFavorite: (state, action) => {
         // state.ids.splice(state.ids.indexOf(action.payload.id))
         state.ids = state.ids.filter(
            (id) => id !== action.payload.id
         );
      }
   }
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
