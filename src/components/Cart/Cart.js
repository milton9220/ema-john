import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce(
        (total, currentCart) => total + currentCart.price,
        0
    );

    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0;
    } else if (total > 15) {
        shippingCost = 5.55;
    } else if (total > 5) {
        shippingCost = 12.45;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Total Ordered:{cart.length}</h5>
            <p>Product Price:{total}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Total Price:{total + shippingCost}</p>
        </div>
    );
};

export default Cart;
