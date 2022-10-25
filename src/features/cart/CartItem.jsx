import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

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
      <td className="text-center">
        <small>{item.qty}</small>
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
