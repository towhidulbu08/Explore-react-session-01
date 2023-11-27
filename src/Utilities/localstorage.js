const getStoredCart=()=>{
  const storedCartString=  localStorage.getItem('cart')
  if(storedCartString){
    return JSON.parse(storedCartString)
  }
  return [];
}
const saveCartToLS=cart=>{
    const cartStrfied=JSON.stringify(cart);
    localStorage.setItem('cart',cartStrfied)
}

const removeFromLS= id=>{
    const cart=getStoredCart()
    const remaining=cart.filter(idx=> idx!==id)
}

const addToLS=id=>{
    const cart=getStoredCart();
    cart.push(id);
    //save to local storage
    saveCartToLS(cart)
}
export {addToLS,getStoredCart}