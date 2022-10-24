import { createPortal } from "react-dom";

export default function GlobalSpinner(props) {
  if (!props.isLoading) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="global-spinner spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>,
    document.getElementById("spinner")
  );
}
