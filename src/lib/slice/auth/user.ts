import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {UserDataType} from "@/type/types";

const initialState = {
    user: {} as UserDataType | null
}

export const userSlice = createSlice({
    initialState,
    name: 'login',
    reducers: {
        setUser: (state, action: PayloadAction<UserDataType>) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        }
    }
})

export default userSlice.reducer

export const {setUser, removeUser} = userSlice.actions
