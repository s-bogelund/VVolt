

import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
	const cartContext = useContext(CartContext)
	const price = `${props.price.toFixed(2)}.-`;

	const addToCartHandler = amount => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		});
		
	}
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
				<MealItemForm onAddToCart={addToCartHandler}/>
			</div>
		</li>
	);
};

export default MealItem;
