import CartForm from "../Cart/CartForm";
import classes from "./FoodItem.module.css";

const FoodItem = ({ id, name, description, price }) => {
    return (
        <li className={classes["container-item"]}>
            <div className={classes["item"]}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>${price}</p>
            </div>
            <CartForm
                productsInfo={{ id, name, description, price }}
                className={classes["addtocart"]}
            />
        </li>
    );
};

export default FoodItem;
