import React from "react";
import { useContext } from "react"
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	 }, 0);

	return (
		<button className={classes.button} onClick={props.onClick} >
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Din Kurv</span>
			<span className={classes.badge}>{ numberOfCartItems }</span>
		</button>
	);
};

export default HeaderCartButton;
