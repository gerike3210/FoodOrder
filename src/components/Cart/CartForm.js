import { useRef } from "react";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order-slice";
import classes from "./CartForm.module.css";

const CartForm = ({ productsInfo }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const { id, name, description, price } = productsInfo;

    const addToCartHandler = (event) => {
        const amount = Number.parseInt(inputRef.current.value);
        event.preventDefault();
        dispatch(
            orderActions.addToCart({
                id,
                name,
                description,
                price,
                amount,
            })
        );
    };

    return (
        <form
            onSubmit={addToCartHandler}
            className={classes["container-addtocart"]}
        >
            <div className={classes["container-fields"]}>
                <p className={classes["addtocart-label"]}>Amount</p>
                <input
                    className={classes["addtocart-input"]}
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1"
                    ref={inputRef}
                ></input>
            </div>
            <button type="submit" className={classes["addtocart-btn"]}>
                Add to Cart
            </button>
        </form>
    );
};

export default CartForm;
