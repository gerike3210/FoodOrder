import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    menu: [
        {
            id: "m1",
            name: "Pizza",
            description: "Speciality from Italy",
            price: "12.99",
        },
        {
            id: "m2",
            name: "Hamburger",
            description: " Speciality from USA",
            price: "14.99",
        },
        {
            id: "m3",
            name: "Sushi",
            description: "Speciality from Japan",
            price: "22.99",
        },
        {
            id: "m4",
            name: "Gulyas Soup",
            description: "Speciality from Hungary",
            price: "10.99",
        },
    ],
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
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

const store = configureStore({ reducer: orderSlice.reducer });

export const orderActions = orderSlice.actions;

export default store;
