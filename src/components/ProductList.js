import React from 'react';
import Product from "./Product";

const ProductList = ({data,fn}) => {
    return ( 
        <main className="productList">
            {data ? data.map(el => <Product name={el.name} img={el.image_url} description={el.description} key={el.id} id={el.id} fn={fn}/>) : null}
        </main>
        
    );
}
 
export default ProductList;