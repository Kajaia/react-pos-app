import { createPortal } from "react-dom";

export default function Modal(props) {
  if (!props.isOpen) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal-portal card bg-white rounded-3 border-0 shadow">
        <div className="card-header bg-white d-flex align-items-center justify-content-between gap-1">
          <h5 className="mb-0 fw-bold">{props.title}</h5>
          <button onClick={props.close} className="btn border-0 p-0">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="card-body">{props.children}</div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
