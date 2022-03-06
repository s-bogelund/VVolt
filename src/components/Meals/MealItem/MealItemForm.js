import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 6
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={amountInputRef}
				label="Antal"
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: `6`,
					step: `1`,
					defaultValue: `1`,
				}}
			/>
			<button>+ Tilføj</button>
			{!amountIsValid && <p>Det maksimale antal af hver ret er 6 stk</p>}
		</form>
	);
};

export default MealItemForm;
