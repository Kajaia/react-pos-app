import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function CartItemList() {
  const items = useSelector((state) => state.cart.items);
  const error = useSelector((state) => state.cart.error);
  const count = items.reduce((prev, cur) => {
    return prev + cur.qty;
  }, 0);
  const total = items.reduce((prev, cur) => {
    return prev + cur.price * cur.qty;
  }, 0);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-5">
        <div className="card rounded-3 h-100 border-0 shadow">
          <div className="card-header rounded-3 border-0 bg-light">
            <h3 className="mb-0">
              <i className="fas fa-shopping-basket text-primary me-2"></i>
              Cart
              {count > 0 && (
                <span className="badge bg-success rounded-pill shadow-sm ms-2">
                  {count === 1 ? `${count} item` : `${count} items`}
                </span>
              )}
            </h3>
          </div>
          <div className="card-body p-0 products-body">
            <div className="row justify-content-center g-3">
              {count < 1 && (
                <h5 className="mt-5 text-center">No items in cart!</h5>
              )}
              {count > 0 && (
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
                      {count > 0 &&
                        items.map((item) => (
                          <CartItem key={item.id} item={item} />
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
              {error && <h5 className="text-center mb-0">{error}</h5>}
            </div>
          </div>
          {total > 0 && <CartTotal total={total} />}
        </div>
      </div>
    </>
  );
}
