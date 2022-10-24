import ProductList from "./features/products/ProductList";
import ErrorBoundary from "./components/errors/ErrorBoundary";

function App() {
  return (
    <div className="container-fluid my-3">
      <div className="row justify-content-center">
        <ErrorBoundary>
          <ProductList />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
