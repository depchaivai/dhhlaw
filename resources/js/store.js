import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './features/image/imageSlice'
import menuReducer from './features/Menu/menuSlice'
export default configureStore({
    reducer: {
        image: imageReducer,
        menu: menuReducer,
    },
})
