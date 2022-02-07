import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import classes from "./CartOrder.module.css";

const CartOrder = ({ onClose }) => {
    const orders = useSelector((state) => state.orders);

    const totalPrice = orders.reduce((prev, item) => {
        return prev + item.price * item.amount;
    }, 0);

    const emptyCartClasses = totalPrice === 0 ? "disable" : "";

    return (
        <Modal onClose={onClose}>
            <ul className={classes["cart-list"]}>
                {orders.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                    />
                ))}
            </ul>
            <div className={classes.checkout}>
                <h2 className={classes.total}>
                    Total: {totalPrice.toFixed(2)}
                </h2>
                <button
                    className={`${classes.order} ${classes[emptyCartClasses]}`}
                >
                    Order
                </button>
            </div>
        </Modal>
    );
};

export default CartOrder;