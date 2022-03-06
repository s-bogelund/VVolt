import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartContext = useContext(CartContext);
	const totalAmount = `${cartContext.totalAmount.toFixed(2)}.-`;
	const hasItems = cartContext.items.length < 1;

	const cartItemRemoveHandler = (id) => {};

	const cartItemAddHandler = (item) => {};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Samlet beløb</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes[`button--alt`]} onClick={props.onClose}>
					Luk
				</button>
				{!hasItems && <button className={classes.button}>Bekræft</button>}
			</div>
		</Modal>
	);
};

export default Cart;
