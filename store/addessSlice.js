import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    addresses: [],
    address: {},
};

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddresses: (state, { payload }) => {
            console.log('setAddresses');
            state.addresses = payload;
        },
        setReading: (state, { payload }) => {
            console.log('setReading');
            state.address = payload;
        },
        resetReading: (state) => {
            console.log('resetReading');
            state.address = {};
        },
    },
});

export const addressReducer = addressSlice.reducer;

export const { setAddresses, setReading, resetReading } = addressSlice.actions;