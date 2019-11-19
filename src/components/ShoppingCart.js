import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({cart,rfc}) => {

    let total = 0;
    cart.map(el => total+=el.quantity*el.price);

    return (
        <div className="shoppingCart">
            <div className="shoppingCart__helpBox">
                {cart.length ? cart.map(el => <CartItem key={el.id} cN={"shoppingCart"} id={el.id} img={el.image} name={el.name} quantity={el.quantity} price={el.price} rfc={rfc}/>) : <p>Empty</p>}
            </div>
            <div className="shoppingCart__summary">
                <p className="shoppingCart__summary__total">{`Total: ${total.toFixed(2)} PLN`}</p>
                <button className="shoppingCart__summary__checkout">Checkout</button>
            </div>
        </div>
        
        
    );
}
 
export default ShoppingCart;