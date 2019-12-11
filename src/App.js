import React, {useState, useEffect} from 'react';
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import MessegeBox from "./components/Messege";
import './styles/style.scss';

const url = 'https://api.punkapi.com/v2/beers?per_page=50';

function App() {
  const [data,setData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [cart,setCart] = useState([]);
  const [isAdd,setIsAdd] = useState(false);
  //const [searchValue,setSearchValue] = useState("");

  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  }

  const addToCart = (id,quantity) => {
    //const item = e.target.parentNode.dataset.id;
    if(cart.find(el => el.id===id)){
      cart.map(el => el.id===id ? el.quantity+=quantity : false);
      setIsAdd(!isAdd);
    }
     
    else{
      const foundItem = data.find( el => el.id===id);
      const item = {
        id: foundItem.id,
        name: foundItem.name,
        image: foundItem.image_url,
        quantity: quantity,
        price: 4.95
      };
      setCart([...cart,item]);
      setIsAdd(!isAdd);
    }
    
  }

  const removeFromCart = id => {
    const filteredCart = cart.filter(el => el.id!==id);
    setCart(filteredCart);
  }

  const handleSearch = e => {
    e.preventDefault();
    const searchValue=e.target.value;
    if(searchValue.length===0){
      setFilteredData(null);
    }
    else{
      const filteredProducts = data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredData(filteredProducts);
    }
    
  }

  /*const filterData = () => {
    const filteredProducts = data.filter(el => el.name.includes(searchValue));
    setFilteredData(filteredProducts);
  }*/

  useEffect(() => {
    try{
      const fetchData = async () => {
        const res = await fetch(`${url}`);
        const result = await res.json();

        setData(result);
      };
      console.log("ok");
      fetchData();
    }
    catch(error){
      console.log(error);
    }
  }, []);

  return (
    <>
    {isAdd ? <MessegeBox fn={changeIsAdd} arg={isAdd} messege={"Add to cart"}/> : null}
    <Header cart={cart} rfc={removeFromCart} hs={handleSearch}/>
    <ProductList data={filteredData!==null ? filteredData : data} fn={addToCart}/>
    </>
  );
}

export default App;
