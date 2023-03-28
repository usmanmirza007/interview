import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducer/mainSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'


export const store = configureStore({
  reducer: {
    user: mainReducer,
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }),

})

export const persistor = persistStore(store)
