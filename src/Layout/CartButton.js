import { Fragment, useContext } from "react";
import Classes from './CartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../State/CartContext";

const CartButton = (props)=>{
    const CartCtx = useContext(CartContext);

    const orderNumber = CartCtx.items.reduce((number,item)=>{
        return number+item.amount;
    },0) ;
    

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