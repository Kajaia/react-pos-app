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
    <>
      <h1>Products list:</h1>
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <img width="100px" src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <small>${product.price}</small>
            <hr />
          </div>
        ))}
    </>
  );
}
