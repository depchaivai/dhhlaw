import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../components/Service/api'

export const fetchImage = createAsyncThunk (
    'image/getAllimage',
    async () => {
        const { data } = await API.get('/image');
        return data;
    }
)

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    ImgList: [],
    status: 'idle'
  },
  reducers: {
    addnewIMG: (state,action) => {
        state.ImgList.push(...action.payload)
    },
    deleteIMG: (state) => {
        state.ImgList .splice(action.payload)
    },
  },
  extraReducers: {
      [fetchImage.pending](state){
          state.status = 'loadding'
      },
      [fetchImage.fulfilled](state,{ payload }){
        state.status = 'loadding'
        state.ImgList = payload
    },
    [fetchImage.pending](state){
        state.status = 'rejected'
    }
  }
})

// Action creators are generated for each case reducer function
export const { addnewIMG, deleteIMG} = imageSlice.actions

export default imageSlice.reducer
