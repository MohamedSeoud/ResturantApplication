import { useReducer } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props)=>{

    const DefaultItems ={
        items:[],
        totalAmount:0
    }

    const cartReducer = (state,action)=>{
        let UpdatedItems=[];
        let updatedTotalAmount = 0;

        switch(action.type){
            case 'ADD':
             UpdatedItems=[...state.items,action.item];
             updatedTotalAmount = state.totalAmount+action.item.price*action.item.amount;

            return{
                items:UpdatedItems,
                totalAmount:updatedTotalAmount
            };

            case 'UPDATE':
             updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
             const index = state.items.findIndex(c=>c.id===action.item.id)
             UpdatedItems=[...state.items];
             UpdatedItems[index].amount += action.item.amount;

             return{
                items:UpdatedItems,
                totalAmount:updatedTotalAmount
            };
            case 'REMOVE':
            const removedIndex = state.items.findIndex(item => item.id === action.id)
            if(state.items[removedIndex].amount===1){
                updatedTotalAmount = state.totalAmount - state.items[removedIndex].price;
                UpdatedItems= state.items.splice(removedIndex, 1);
                return{
                    items:UpdatedItems,
                    totalAmount:updatedTotalAmount
                };
            }
            else{
                updatedTotalAmount = state.totalAmount - state.items[removedIndex].price;
                UpdatedItems= state.items;
                UpdatedItems[removedIndex].amount-=1
                return{
                    items:UpdatedItems,
                    totalAmount:updatedTotalAmount
                };
            }
            

            default:
            return DefaultItems;
        }

    }

    const [cartItems,cartItemsDispatch] = useReducer(cartReducer,DefaultItems);
    
    const onAddHandler = (item)=>{

       const index = +(cartItems.items.findIndex(c=>c.id===item.id))
       if(index !== -1)
       {
        cartItemsDispatch({type:'UPDATE',item:item});
       }
       else{
        cartItemsDispatch({type:'ADD',item:item});
       }

    };
    const onRemoveHandler = (id)=>{
        cartItemsDispatch({type:'REMOVE' ,id:id});
    };
 
    const DefaultCart = {
        items:cartItems.items,
        totalAmount:cartItems.totalAmount,
        onAdd:onAddHandler,
        onRemove:onRemoveHandler
    }

    return(
        <CartContext.Provider value={DefaultCart}>
            {props.children}
        </CartContext.Provider>
    )}
export default CartContextProvider;