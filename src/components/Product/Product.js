import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div className="product-thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="product-content">
                <h3>
                    {" "}
                    <Link to={"/product/" + key}>{name}</Link>{" "}
                </h3>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>${price}</p>
                <p>
                    <small>only {stock} left in stock</small>
                </p>
                <button
                    className="btn"
                    onClick={() => props.productAddToCart(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{" "}
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
