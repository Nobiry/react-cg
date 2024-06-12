import Modal from "./Modal";

function Checkout({ closeModal }) {
  return (
    <form>
      <h2>Checkout</h2>
      <p>Total Amount: $[TOTAL]</p>
      <div className="control">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="full-name" required />
      </div>
      <div className="control">
        <label htmlFor="full-name">E-Mail Address</label>
        <input type="email" name="email" required />
      </div>
      <div className="control">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" required name="full-name" />
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" name="postal" required />
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input type="text" name="city" required />
        </div>
      </div>
      <div className="modal-actions">
        <button type="button" className="text-button" onClick={closeModal}>
          Close
        </button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  );
}

export default Checkout;
