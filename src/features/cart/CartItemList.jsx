import { useSelector } from "react-redux";

export default function CartItemList() {
  const cartItems = useSelector((state) => state.cart.items);
  const error = useSelector((state) => state.cart.error);
  const cartCount = cartItems.reduce((prev, cur) => {
    return prev + cur.qty;
  }, 0);
  const total = cartItems.reduce((prev, cur) => {
    return prev + cur.price * cur.qty;
  }, 0);

  return (
    <>
      <div className="col-12 col-md-6">
        <div className="card rounded-3 h-100 border-0 shadow">
          <div className="card-header bg-light">
            <h3 className="mb-0">
              <i className="fas fa-shopping-basket text-primary me-2"></i>
              Cart
              {cartCount > 0 && (
                <span className="badge bg-success rounded-pill shadow-sm ms-2">
                  {cartCount === 1 ? `${cartCount} item` : `${cartCount} items`}
                </span>
              )}
            </h3>
          </div>
          <div className="card-body p-0 products-body">
            <div className="row justify-content-center g-3">
              {cartCount < 1 && (
                <h5 className="mt-5 text-center">No items in cart!</h5>
              )}
              {cartCount > 0 && (
                <div className="table-responsive mx-0">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>
                          <small>Product</small>
                        </th>
                        <th className="text-center">
                          <small>Price</small>
                        </th>
                        <th className="text-center">
                          <small>Qty</small>
                        </th>
                        <th className="text-center">
                          <small>Subtotal</small>
                        </th>
                        <th className="text-center">
                          <small>Action</small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartCount > 0 &&
                        cartItems.map((item) => (
                          <tr key={item.id}>
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
                              <small>${item.price * item.qty}</small>
                            </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-danger rounded-circle shadow-sm">
                                <i className="fas fa-trash fa-sm"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
              {total > 0 && `Total: $${total}`}
              {error && <h5 className="text-center mb-0">{error}</h5>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
