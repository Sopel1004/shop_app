import React from 'react';
import searchImage from '../images/icons8-search-50.png';

const Search = ({className,hs}) => {
    return ( 
        <div className={`${className}__searchBox`}>
            <img width="24" height="24" src={searchImage} className={`${className}__searchBox__button`}></img>
            <input type="search" className={`${className}__searchBox__input`} placeholder="Search..." onInput={hs}></input>
        </div>

    );
}
 
export default Search;