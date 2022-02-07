import Cart from "../Cart/Cart";
import CartModal from "../Cart/CartOrder";
import classes from "./Food.module.css";
import FoodMenu from "./FoodMenu";
import FoodWelcome from "./FoodWelcome";

const Food = () => {
    return (
        <>
            <div className={classes["container"]}>
                <nav className={classes.navbar}>
                    <h2 className={classes["company-title"]}>Speedy Food</h2>
                    <Cart />
                </nav>
                <section className={classes["container-welcome"]}>
                    <FoodWelcome />
                </section>
                <section className={classes["menu"]}>
                    <FoodMenu />
                </section>
            </div>
        </>
    );
};

export default Food;
