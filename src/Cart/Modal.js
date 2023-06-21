import { Fragment } from 'react';
import Classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';


const Backdrop = (props)=>{
    return (<div onClick={props.onClose} className={Classes.backdrop}></div>)
}
const Overlay = (props)=>{
    return(
    <div className={Classes.modal}>
        <div className={Classes.content}>
            {props.children}
        </div>
    </div>
)}

const portalElement = document.getElementById('overelays');


const Modal = (props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
            
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalElement)}
        </Fragment>
    )

}
export default Modal;