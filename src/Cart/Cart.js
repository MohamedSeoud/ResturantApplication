import { Fragment } from "react";
import Classes from './Cart.module.css';
import Card from "../UI/Card";
import Modal from "./Modal";

const Cart = (props)=>{

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
                <span>{}</span>
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