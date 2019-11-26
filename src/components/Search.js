import React, {useState} from 'react';
import searchImage from '../images/icons8-search-50.png';

const Search = ({className,hs}) => {
    
    const [isActive,setIsActive] = useState(false);

    return ( 
        <div className={`${className}__searchBox`}>
            <img width="24" height="24" src={searchImage} className={`${className}__searchBox__button`} alt="searchImage" onClick={() => setIsActive(!isActive)}></img>
            <input type="search" className={isActive ? `${className}__searchBox__input ${className}__searchBox__input--active`:`${className}__searchBox__input`} placeholder="Search..." onInput={hs}></input>
        </div>

    );
}
 
export default Search;