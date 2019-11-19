import React from 'react';

const CartItem = ({cN,img,name,quantity,price,id,rfc}) => {
    return ( 
        <div className={`${cN}__item`}>
            <img src={img} alt="productImage" className={`${cN}__item__image`} width="16" height="32"></img>
            <p className={`${cN}__item__name`}>{name}</p>
            <span className={`${cN}__item__quantity`}>Quantity:<br/>{quantity}</span>
            <span className={`${cN}__item__price`}>Price:<br/>{price}</span>
            <button className={`${cN}__item__deleteBtn`} onClick={() => rfc(id)}>X</button>
        </div>
    );
}
 
export default CartItem;