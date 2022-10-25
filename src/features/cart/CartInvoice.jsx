export default function CartInvoice({ options, total, finalPrice }) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">Items in cart</div>
        <span className="badge bg-success rounded-pill">14</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">Tax</div>
        <small>{options.tax}%</small>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">Discount</div>
        <small>{options.discount}%</small>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">Shipping</div>
        <small>${options.shipping}</small>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">Price</div>
        <span className="badge bg-secondary rounded-pill">
          ${total.toFixed(2)}
        </span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-start bg-light">
        <div className="ms-2 me-auto fw-bold">Total price</div>
        <span className="badge bg-primary rounded-pill">
          ${finalPrice.toFixed(2)}
        </span>
      </li>
    </ul>
  );
}
