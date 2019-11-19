import React, {useState} from 'react';

const Product = ({name, img, description,id,fn}) => {
    const [isVisible,setVisible] = useState(false);
    const [quantity,setQuantity] = useState(1);

    const handleDisplayDesc = () =>{
        setVisible(!isVisible);
    }

    const handleAddQuantity = () => {
        if(quantity<10)
            setQuantity(quantity+1);
    }

    const handleSubtractQuantity = () => {
        if(quantity>1)
            setQuantity(quantity-1);
    }

    return ( 
        <div className="product">
            <img tabIndex="0" src="https://img.icons8.com/ios/24/000000/info.png" alt="image" className="product__info" onMouseOver={handleDisplayDesc} onMouseOut={handleDisplayDesc} onFocus={handleDisplayDesc} onBlur={handleDisplayDesc}></img>
            <img src={img} alt="image" className="product__image"></img>
            <p className={name.length>20 ? "product__name product__name--smallCaption" : "product__name"}>{name}</p>
            <p className="product__price">4,95 PLN</p>
            <div className="product__quantity">
                <button className="product__quantity__button" onClick={handleSubtractQuantity} >-</button>
                <input className="product__quantity__input" type="text" value={quantity} readOnly></input>
                <button className="product__quantity__button" onClick={handleAddQuantity}>+</button>
            </div>
            
            <button className="product__button" onClick={() => {fn(id,quantity); setQuantity(1)}}>Add to cart</button>
            {isVisible ? <div className="product__description">{description}</div> : null}
        </div>
    );
}
 
export default Product;