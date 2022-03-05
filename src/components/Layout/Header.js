import { Fragment } from "react";
import foodImage from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>VVolt</h1>
				<HeaderCartButton/>
			</header>
			<div className={classes["main-image"]}>
				<img src={foodImage} alt="buffet table" />
			</div>
		</Fragment>
	);
};

export default Header;
