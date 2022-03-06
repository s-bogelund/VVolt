import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = (
        <ul className={classes["cart-items"]}>
			{[{ id: "c1", name: "Sushi", amount: 2, price: 129.95 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Samlet beløb</span>
                <span>356.80</span>
            </div>
            <div className={classes.actions}>
                <button className={classes[`button--alt`]} onClick={ props.onClose}>Luk</button>
                <button className={classes.button}>Bekræft</button>
            </div>
		</Modal>
	);
};

export default Cart;
