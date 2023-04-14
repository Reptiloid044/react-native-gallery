import { configureStore } from '@reduxjs/toolkit';
import artReducer from '../features/pictureReducer';


export const store = configureStore({
  reducer: {
    pictures: artReducer,
  }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;