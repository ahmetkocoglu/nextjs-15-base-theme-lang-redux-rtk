import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BookState {
    floor: number | null;
    unit: number;
}

interface BookState {
    floor: number | null;
    unit: number;
}

const initialState: BookState = {
    floor: null,
    unit: 0,
};
export const bookSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        updateFloor: (state, action: PayloadAction<number>) => {
            state.floor = action.payload;
        },
        updateUnit: (state, action: PayloadAction<number>) => {
            state.unit = parseInt(String(action.payload)) + 1;
        },
    },
});

export const { updateFloor, updateUnit } = bookSlice.actions;
export default bookSlice.reducer;