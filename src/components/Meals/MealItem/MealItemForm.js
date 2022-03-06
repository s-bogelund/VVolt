import React from 'react'
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Antal" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: `5`,
                step: `1`,
                defaultValue: `1`
            }}/>
            <button>
                + Tilføj
            </button>
      </form>
  )
}

export default MealItemForm