import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./authSlice.ts";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware:getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export {store, persistor}
