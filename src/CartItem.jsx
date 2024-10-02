import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
import { removeItem, updateQuantity, addItem } from './CartSlice'; // Import addItem, removeItem, and updateQuantity



const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + parseFloat(item.cost) * item.quantity, 0).toFixed(2);
    };

    const handleContinueShopping = () => {
        window.location.href = '/e-plantShopping/products'; // Redirect to the product page with base URL
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
        // Optionally, you can add the item again if it was previously removed
        dispatch(addItem(item));
    };
    

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };
    

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };
    

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        return (parseFloat(item.cost) * item.quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div className="cart-item" key={item.name}>
                            <img className="cart-item-image" src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-cost">${item.cost.toFixed(2)}</div>
                                <div className="cart-item-quantity">
                                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                    <span className="cart-item-quantity-value">{item.quantity}</span>
                                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                                </div>
                                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={() => alert('Coming Soon')}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;
