import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Frisk fisk og grøntsager",
		price: 129.95,
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "En tysk specialitet",
		price: 160.5,
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "Ægte amerikansk!",
		price: 123.95,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Sundt og nærende - spis med god samvittighed",
		price: 119,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
