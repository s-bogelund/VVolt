import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
	const price = `${props.price.toFixed(2)}.-`;
	return (
		<li className={classes.meal}>
			<div className={classes["container-left"]}>
				<div>
					<h3>{props.name}</h3>
				</div>
				<div className={`${classes.description} ${classes["container-left"]}`}>
					{props.description}
				</div>
				<div className={`${classes.price} ${classes["container-left"]}`}>
					{price}
				</div>
			</div>
            <div className={classes["container-right"]}>
				<MealItemForm />
			</div>
		</li>
	);
};

export default MealItem;
