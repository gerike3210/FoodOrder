import classes from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                Order some food, we guarantee the warmth and speed!
            </h1>
            <p className={classes.paragraph}>
                Since 2014 the fastest food delivery company in the EU! The
                average delivery time is less than 40 minutes. Order now, we
                serve you as fast as a waitress!
            </p>
        </div>
    );
};

export default WelcomeMessage;
