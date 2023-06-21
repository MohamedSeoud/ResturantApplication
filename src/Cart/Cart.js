import { Fragment, useContext } from "react";
import Classes from './Cart.module.css';
import Modal from "./Modal";
import CartContext from "../State/CartContext";

const Cart = (props)=>{

    const CartCtx = useContext(CartContext); 
    // const CartItems = props.items.map(((item)=>{
    //     return(
    //         <li>
    //             <div>{item.name}</div>
    //         </li>
    //     )
    // }))

    return(

        <Fragment>
            <Modal onClose={props.closeClicked}>
            <div>
            CartItem
            <div className={Classes.total}>
                <span>Amount</span>
                <span>{CartCtx.totalAmount}</span>
            </div>
            </div>
            <div className={Classes.actions}>
                <button onClick={props.closeClicked} className={Classes['button--alt']}>Close</button>
                <button className={Classes.button}>Order</button>
            </div>
            </Modal>
        </Fragment>
    )

}
export default Cart;