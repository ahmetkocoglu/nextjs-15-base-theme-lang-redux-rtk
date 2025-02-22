import { configureStore } from '@reduxjs/toolkit'

import bookSlice from './slice/bookSlice';
import tokenReducer from "@/lib/slice/auth/token";
import userReducer from "@/lib/slice/auth/user";
import { loginApi } from "@/lib/api/auth"

export const makeStore = () => {
    return configureStore({
        reducer: {
            booking: bookSlice,
            tokenState: tokenReducer,
            userState: userReducer,
            [loginApi.reducerPath]: loginApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                loginApi.middleware,
            ),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
