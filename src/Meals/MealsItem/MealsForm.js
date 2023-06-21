import { Fragment, useRef, useState } from "react";
import Input from "../../UI/Input";
import Classes from './MealsForm.module.css'
 
const MealForm =(props) =>{
    const amountRef = useRef();
    const [amountValue,setAmountValue] = useState(true); 

    const inputFormItems ={
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }


    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = +(amountRef.current.value);
        if(enteredAmount===0||enteredAmount>5||enteredAmount<1){
            setAmountValue(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    } 



    return(
        <Fragment>
            <form className={Classes.form} onSubmit={onSubmitHandler}>
                <Input
                input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',}}
                ref={amountRef}
                label={"Amount"}/>
                <button > +Add </button>
                {!amountValue && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </Fragment>
    )
}

export default MealForm;