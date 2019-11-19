import React, {useState} from 'react';
import ShoppingCart from "./ShoppingCart";
import Search from './Search';
import cartImage from '../images/icons8-shopping-bag-32.png';
import cartImageBlack from '../images/icons8-shopping-bag-32-black.png';

const Header = ({cart,rfc,hs}) => {
    const [isVisible,setVisible] = useState(false);

    const handleDisplayDesc = () =>{
        setVisible(!isVisible);
    }

    let amount=0;
    if(cart.length>0) cart.map(el => amount+=el.quantity);

    return ( 
        <header className="header">
            <p className="header__logo">BEER SHOP</p>
            <Search className={"header"} hs={hs}/>
            <div className="header__box" onClick={handleDisplayDesc}>
                <img className={isVisible ? "header__cartIcon header__cartIcon--active" : "header__cartIcon"} src={isVisible ? cartImageBlack : cartImage}></img>
                <span className="header__cartQuantity">{amount}</span>
            </div>
            {isVisible ? <ShoppingCart cart={cart} rfc={rfc}/> : null}
        </header>
    );
}
 
export default Header;