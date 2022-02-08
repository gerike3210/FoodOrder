import { useSelector } from "react-redux";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
    const menu = [
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
    ];

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
