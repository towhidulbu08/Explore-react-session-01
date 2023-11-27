import './cart.css';
import PropTypes from 'prop-types';
const Cart = ({cart}) => {
    return (
        <div>
                  <h4>Cart:{cart.length}</h4>
                  <div className="cart-container"> 
                    {
                        cart.map(bottle=> <img src={bottle.img} key={bottle.id}></img>)
                    }
                  </div>

        </div>
    );
};
Cart.propTypes={
    cart: PropTypes.array.isRequired
}
export default Cart;