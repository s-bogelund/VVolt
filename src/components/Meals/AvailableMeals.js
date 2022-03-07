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
		name: "Pizza Bianco",
		description: "Sundt og nærende - spis med god samvittighed",
		price: 119,
	},
	{
		id: "m5",
		name: "Pizza Diavola",
		description: "Lækker pizza fra stenovn med stærk salami",
		price: 100,
	},
	{
		id: "m6",
		name: "Pizza Bianco Royale",
		description: "Luksus pizza der vil noget!",
		price: 150,
	},
	{
		id: "m7",
		name: "Solo Empanadas",
		description: "Spanske lækkerier! Fås med oksekød eller kylling",
		price: 80,
	},
	{
		id: "m8",
		name: "Homestyle Beef Burgundy Menu",
		description: "Kæmpe burger fra McDonald's",
		price: 63,
	},
	{
		id: "m9",
		name: "Old School Sandwich Combo",
		description: "Knasende toast med saftigt hakket oksekød og grøntsager",
		price: 203,
	},
	{
		id: "m10",
		name: "Fitness Bowl med Tun",
		description:
			"Proteinbombe der er perfekt, når man lige har været nede og træne!",
		price: 98,
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
