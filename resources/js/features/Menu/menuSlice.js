import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../components/Service/api'

export const fetchMenu = createAsyncThunk (
    'menu/getAllmenu',
    async () => {
        const { data } = await API.get('/menu');
        return data;
    }
)

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    MenuList: [],
    status: 'idle'
  },
  reducers: {
    addnewMenu: (state,action) => {
        state.MenuList.push(...action.payload)
    },
    deleteMenu: (state) => {
        state.MenuList .splice(action.payload)
    },
  },
  extraReducers: {
      [fetchMenu.pending](state){
          state.status = 'loadding'
      },
      [fetchMenu.fulfilled](state,{ payload }){
        state.status = 'success'
        state.MenuList = payload
    },
    [fetchMenu.pending](state){
        state.status = 'rejected'
    }
  }
})

// Action creators are generated for each case reducer function
export const { addnewMenu, deleteMenu} = menuSlice.actions

export default menuSlice.reducer
