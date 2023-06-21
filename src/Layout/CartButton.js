import { Fragment } from "react";
import Classes from './CartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const CartButton = (props)=>{

    const orderNumber = 3;

    return(
        <Fragment>
            <button onClick={props.onClick} className={Classes.button}>
                <span className={Classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    My Cart
                </span>
                <span className={Classes.badge}>
                    {orderNumber}
                </span>
            </button>
        </Fragment>
    )

}
export default CartButton;