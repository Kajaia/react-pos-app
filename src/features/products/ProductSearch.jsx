import { useDispatch } from "react-redux";
import { searchItems } from "./productsSlice";

export default function ProductSearch() {
  const dispatch = useDispatch();

  return (
    <div className="col-12">
      <input
        type="text"
        name="search"
        id="search"
        defaultValue={""}
        onChange={(e) => dispatch(searchItems(e.target.value))}
        placeholder="Search by product name..."
        className="form-control rounded-pill shadow-sm"
      />
    </div>
  );
}
