import { useSelector } from "react-redux";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
    const menu = useSelector((state) => state.menu);

    return (
        <div className={classes["container-menu"]}>
            <Card className={classes["menu-items"]}>
                <ul className={classes["items-list"]}>
                    {menu.map((item) => (
                        <FoodItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default FoodMenu;
