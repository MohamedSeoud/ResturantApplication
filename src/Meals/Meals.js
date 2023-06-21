import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvailableMeals";
import Card from "../UI/Card";


const Meals = ()=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvaliableMeals/>
        </Fragment>
    )
}
export default Meals;