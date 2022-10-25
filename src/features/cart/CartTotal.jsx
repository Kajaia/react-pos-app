import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "./cartSlice";
import Modal from "../../portals/Modal";
import CartInvoice from "./CartInvoice";

export default function CartTotal({ total }) {
  const [options, setOptions] = useState({
    tax: 10,
    discount: 0,
    shipping: 2.99,
  });
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const tax = (total / 100) * options.tax;
  const discount = (total / 100) * options.discount;
  const shipping = Number(options.shipping);
  const finalPrice = total + tax - discount + shipping;

  const resetCartItems = () => {
    dispatch(resetCart());
  };

  const handleChange = (e) => {
    setOptions((option) => {
      return { ...option, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <div className="card-footer mt-auto bg-white rounded-3 border-0 py-3">
        <div className="mb-3">
          <div className="row justify-content-center g-3">
            <div className="col-6 col-md-4">
              <label htmlFor="tax">Tax %</label>
              <input
                type="number"
                name="tax"
                id="tax"
                value={options.tax}
                onChange={(e) => handleChange(e)}
                min="0"
                className="form-control rounded-pill"
              />
            </div>
            <div className="col-6 col-md-4">
              <label htmlFor="discount">Discount %</label>
              <input
                type="number"
                name="discount"
                id="discount"
                value={options.discount}
                onChange={(e) => handleChange(e)}
                min="0"
                className="form-control rounded-pill"
              />
            </div>
            <div className="col-6 col-md-4">
              <label htmlFor="shipping">Shipping $</label>
              <input
                type="number"
                name="shipping"
                id="shipping"
                value={options.shipping}
                onChange={(e) => handleChange(e)}
                min=".01"
                step=".01"
                className="form-control rounded-pill"
              />
            </div>
          </div>
        </div>
        <span className="badge bg-primary rounded-pill shadow-sm w-100 fs-5">{`Total price: $${finalPrice.toFixed(
          2
        )}`}</span>
        <div className="mt-2 d-flex align-items-center justify-content-center flex-wrap gap-2">
          <button
            onClick={resetCartItems}
            className="btn btn-sm btn-danger rounded-pill shadow-sm px-3"
          >
            <i className="fas fa-power-off fa-sm me-1"></i>
            Reset
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-sm btn-success rounded-pill shadow-sm px-3"
          >
            <i className="fas fa-receipt fa-sm me-1"></i>
            Invoice
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} title="Invoice">
        <CartInvoice options={options} total={total} finalPrice={finalPrice} />
      </Modal>
    </>
  );
}
