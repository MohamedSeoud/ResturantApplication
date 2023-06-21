import { Fragment } from "react"
import Classes from './Header.module.css';
import Image from '../Assest/meals.jpg'
import CartButton from "./CartButton";
const Header = (props) =>{


    return(
        <Fragment>
            <header className={Classes.header}>
            <h1>React Meals</h1>
            <CartButton onClick={props.shownClicked}/>
            </header>
            <div className={Classes['main-image']}>
                <img src={Image} alt="A table of full delicious food"></img>
            </div>
        </Fragment>
        )

}
export default Header