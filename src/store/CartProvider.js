import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_CART_ITEM") {
		const updateTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItem;
		let updatedItems;

		if (existingCartItem) {
			updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		console.log(state, action);
		return {
			items: updatedItems,
			totalAmount: updateTotalAmount,
		};
	}
	console.log("hello");
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: `REMOVE_CART_ITEM`, id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;