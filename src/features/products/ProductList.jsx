import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "./productsSlice";

export default function ProductList() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(getItems());
  }, [status, dispatch]);

  return (
    <div className="col-12 col-md-8">
      <div className="card rounded-3 h-100 border-0 shadow">
        <div className="card-header bg-light">
          <h3 className="mb-0">
            <i className="fas fa-shopping-basket text-primary me-2"></i>
            Products
          </h3>
        </div>
        <div className="card-body products-body">
          <div className="row justify-content-center g-3">
            {products.length > 0 &&
              products.map((product) => (
                <div
                  className="col-6 col-md-4 col-lg-3 col-xl-2"
                  key={product.id}
                >
                  <div className="product card h-100 border-0 rounded-3 shadow">
                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-primary rounded-pill shadow-sm position-absolute m-1">
                        ${product.price}
                      </span>
                      <img
                        width="100%"
                        height="100px"
                        className="rounded-3 cover mb-1"
                        src={product.image}
                        alt={product.name}
                      />
                      <small className="fw-bold">{product.name}</small>
                      <br />
                      <small className="mt-auto">#{product.id}</small>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
