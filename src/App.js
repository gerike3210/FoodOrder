import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "./store/order-actions";
import "./App.module.css";
import Food from "./components/Food/Food";
import Modal from "./components/UI/Modal";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        const sendRequest = async () => {
            const response = await fetch(
                "https://cartdatabase-988d7-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        ...{ ...orders },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Sendind cart data failed");
            }
        };
        sendRequest().catch(() => {});
    }, [orders]);

    return (
        <>
            <Food />
        </>
    );
}

export default App;
