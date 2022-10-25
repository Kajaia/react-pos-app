import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem({ ...item, qty: 1 }));
  };

  return (
    <div className="col-6 col-sm-4 col-md-6 col-lg-4">
      <div
        onClick={() => addToCart(product)}
        className="product card h-100 border-0 rounded-3 shadow"
      >
        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary rounded-pill shadow-sm position-absolute m-1">
            ${product.price}
          </span>
          <img
            width="100%"
            height="130px"
            className="rounded-3 cover mb-1"
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
          <small className="fw-bold line-height mb-1">{product.name}</small>
          <br />
          <small className="mt-auto">#{product.id}</small>
        </div>
      </div>
    </div>
  );
}
