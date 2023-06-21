import classes from './MealItem.module.css';
import MealForm from './MealsForm';

const MealItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
   
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;