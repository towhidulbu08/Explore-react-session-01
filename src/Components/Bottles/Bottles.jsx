import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from local storage

  useEffect(() => {
    console.log("call again", bottles.length);
    if (bottles.length) {
      const storedCart = getStoredCart();
      const savedCart=[]
      for(const id of storedCart){
        const bottle=bottles.find(bottle=> bottle.id===id)
        if(bottle){
            savedCart.push(bottle)
        }
      }
      console.log('saved cart',savedCart);
      setCart(savedCart)
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveCart = id=>{
    
  }

  return (
    <div>
      <h2>Bottles Available:{bottles.length}</h2>
      <Cart cart={cart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
