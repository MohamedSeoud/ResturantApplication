import './App.css';
import { Fragment, useState } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartContext from './State/CartContextProvider';
import CartContextProvider from './State/CartContextProvider';

function App() {

  const [cartIsShwown,setCartIsShwown] = useState(false);

  const onShwownHandler = ()=>{
    setCartIsShwown(true);
  }

  const onCloseHandler = ()=>{
    setCartIsShwown(false);
  }


  return (
    <CartContextProvider>
      {cartIsShwown && <Cart closeClicked={onCloseHandler}/>}
      <Header shownClicked={onShwownHandler}/>
      <main>
      <Meals/>
      </main>
      </CartContextProvider>
      );
}

export default App;
