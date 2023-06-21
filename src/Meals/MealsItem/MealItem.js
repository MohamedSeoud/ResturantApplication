import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealForm from './MealsForm';
import CartContext from '../../State/CartContext';

const MealItem = (props) => {

  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    CartCtx.onAdd({
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.name
      }
    );
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