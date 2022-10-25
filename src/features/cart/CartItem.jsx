import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "./cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <tr>
      <td>
        <small>
          {item.name} - #{item.id}
        </small>
      </td>
      <td className="text-center">
        <small>${item.price}</small>
      </td>
      <td className="text-center w-25">
        <div className="input-group">
          <button
            onClick={() => dispatch(decrementQty(item.id))}
            className="btn btn-sm btn-secondary px-1"
          >
            <i className="fas fa-minus fa-xs"></i>
          </button>
          <input
            type="number"
            min="1"
            value={item.qty}
            className="form-control py-0 qty-input text-center"
            disabled
          />
          <button
            onClick={() => dispatch(incrementQty(item.id))}
            className="btn btn-sm btn-secondary px-1"
          >
            <i className="fas fa-plus fa-xs"></i>
          </button>
        </div>
      </td>
      <td className="text-center">
        <small>${(item.price * item.qty).toFixed(2)}</small>
      </td>
      <td className="text-center">
        <button
          onClick={() => removeItemFromCart(item.id)}
          className="btn btn-sm btn-danger rounded-circle shadow-sm"
        >
          <i className="fas fa-trash fa-sm"></i>
        </button>
      </td>
    </tr>
  );
}
