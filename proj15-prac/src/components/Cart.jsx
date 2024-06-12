import Modal from "./Modal";

function Cart({ closeModal, openCheckout, cart, addToCard, removeFromCard }) {
  function renderCartItems() {
    const orders = cart.orders;
    let content = [];
    
    
    for (let key in orders) {
      if (orders.hasOwnProperty(key)) {
        const meal = orders[key];
        content.push(
          <li key={key} className="cart-item">
            <p>
              {meal.name} - {meal.count} x ${meal.count * meal.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => removeFromCard(meal)}>-</button>
              <span>{meal.count}</span>
              <button onClick={() => addToCard(meal)}>+</button>
            </div>
          </li>
        );
      }
    }

    return content;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>{renderCartItems()}</ul>
      <p className="cart-total">${cart.totalPrice}</p>
      <div className="modal-actions">
        <button className="text-button" onClick={closeModal}>
          Close
        </button>
        <button className="button" onClick={openCheckout}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
