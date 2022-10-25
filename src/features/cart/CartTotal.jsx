export default function CartTotal({ total }) {
  return (
    <div className="card-footer mt-auto bg-white rounded-3 border-0 py-3">
      <span className="badge bg-primary rounded-pill shadow-sm w-100 fs-5">{`Total price: $${total.toFixed(
        2
      )}`}</span>
      <div className="mt-2 d-flex align-items-center justify-content-center flex-wrap gap-2">
        <button className="btn btn-sm btn-danger rounded-pill shadow-sm px-3">
          <i className="fas fa-power-off fa-sm me-1"></i>
          Reset
        </button>
        <button className="btn btn-sm btn-success rounded-pill shadow-sm px-3">
          <i className="fas fa-receipt fa-sm me-1"></i>
          Invoice
        </button>
      </div>
    </div>
  );
}
