import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, stock, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <h2>Price : $ {price}</h2>
        <h5>
          {" "}
          <small>by : {seller}</small>{" "}
        </h5>
        <h6>Only {stock} left in the stock - order soon</h6>
        <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;