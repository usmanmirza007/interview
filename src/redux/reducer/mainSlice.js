import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: [],
}

const initialState = {
    token: false,
    user: null
}

export const mainSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn: (state, data) => {
            state.token = data.payload
        },
        addUserDetail: (state, data) => {
            state.user = data.payload
        },
        logout : (state) => {
            state.token = false
        },
    },
})

export const { loggedIn, logout, addUserDetail } = mainSlice.actions

export const mainReducer = persistReducer(persistConfig, mainSlice.reducer)