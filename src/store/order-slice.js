import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            const data = action.payload;
            for (const key in data) {
                const item = data[key];
                state.orders.push({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    amount: item.amount,
                    price: item.price,
                });
            }
        },
        addToCart(state, action) {
            const existingItem = state.orders.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.amount += action.payload.amount;
                return;
            }
            state.orders.push({
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                amount: action.payload.amount,
            });
        },
        increase(state, action) {
            const existingItem = state.orders.find(
                (item) => item.id === action.payload
            );
            existingItem.amount++;
        },
        decrease(state, action) {
            const id = action.payload;
            const existingItem = state.orders.find((item) => item.id === id);
            if (existingItem.amount > 1) {
                existingItem.amount--;
            } else {
                state.orders = state.orders.filter((item) => item.id !== id);
            }
        },
    },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
