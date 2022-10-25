import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalSpinner from "../../portals/GlobalSpinner";
import ProductItem from "./ProductItem";
import { getItems } from "./productsSlice";

export default function ProductList() {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(getItems());
  }, [status, dispatch]);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-7">
        <div className="card rounded-3 h-100 border-0 shadow">
          <div className="card-header rounded-3 border-0 bg-light">
            <h3 className="mb-0">
              <i className="fas fa-store text-primary me-2"></i>
              Products
            </h3>
          </div>
          <div className="card-body products-body">
            <div className="row justify-content-center g-3">
              {products.length > 0 &&
                products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              {error && <h5 className="text-center mb-0">{error}</h5>}
            </div>
          </div>
        </div>
      </div>
      {status === "pending" && <GlobalSpinner isLoading />}
    </>
  );
}
