import { orderActions } from "./order-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                "https://cartdatabase-988d7-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
            );

            if (!response.ok) {
                throw new Error("Could not fetch");
            }

            const data = await response.json();
            return data;
        };
        try {
            const cartData = await sendRequest();
            dispatch(orderActions.replaceCart(cartData));
        } catch (error) {
            console.log(error);
        }
    };
};
