import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartOrder from "./CartOrder";

const Cart = () => {
    const [showModal, setShowModal] = useState(false);

    const orders = useSelector((state) => state.orders);

    const totalAmount = orders.reduce((prev, item) => {
        return prev + item.amount;
    }, 0);

    const openModalHandler = () => {
        setShowModal(true);
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <>
            <button onClick={openModalHandler} className={classes.cart}>
                <div className={classes["cart-container"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={classes["cart-icon"]}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <p className={classes["cart-text"]}>Your Cart</p>
                    <span className={classes["cart-amount"]}>
                        {totalAmount}
                    </span>
                </div>
            </button>
            {showModal && <CartOrder onClose={closeModalHandler} />}
        </>
    );
};

export default Cart;
