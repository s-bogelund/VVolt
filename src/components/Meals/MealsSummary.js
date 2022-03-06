import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
	return (
		<section className={classes.summary}>
			<h2>Byens lækreste mad, bragt til dig!</h2>
			<p >
				Vælg dine favoritmåltider fra vores brede udvalg og få bragt et lækkert
				måltid til frokost eller aftensmad hjemme i din egen stue!
			</p>
			<p>
				Alle vores retter er af den højeste kvalitet med de bedste råvarer, og
				de ankommer lige når du vil have dem. Vores erfarne kokke tilbereder dem
				præcis som du vil have dem!
			</p>
		</section>
	);
};

export default MealsSummary;
