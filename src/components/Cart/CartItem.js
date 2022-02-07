import { useDispatch } from "react-redux";
import { orderActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = ({ id, name, amount, price }) => {
    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch(orderActions.increase(id));
    };

    const decreaseHandler = () => {
        dispatch(orderActions.decrease(id));
    };

    return (
        <li className={classes.item}>
            <div className={classes.text}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.amount}>{amount}</p>
                <p className={classes.price}>{(price * amount).toFixed(2)}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={increaseHandler}>+</button>
                <button onClick={decreaseHandler}>-</button>
            </div>
        </li>
    );
};

export default CartItem;
