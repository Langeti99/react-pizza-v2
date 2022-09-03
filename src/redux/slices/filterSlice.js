import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryID: 0,
  currentPage: 1,
  pages: 1,
  sort: { name: 'популярности', sortProperty: 'rating' }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, {payload}) => {
      state.categoryID = payload;
    },
    setSort: (state, {payload}) => {
      state.sort = payload;
    },
    setCurrentPage: (state, action ) => {
      state.currentPage = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    }
  },
})

export const { setCategory, setSort, setCurrentPage, setPages } = filterSlice.actions

export default filterSlice.reducer