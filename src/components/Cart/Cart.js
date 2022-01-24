import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const total = cart.reduce ((total, product) => total + product.price, 0);

  let shipping = 0;
  if(total > 35){
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  } 

  const tax = (total /10);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Order: {cart.length}</p>
      <h3>Product Price = {total}</h3>
      <p><small>Shipping Cost {shipping}</small></p>
      <p><small>Tax {tax}</small></p>
      <p>Total Price = {total + shipping + tax}</p>
    </div>
  );
};

export default Cart;