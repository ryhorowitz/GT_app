import '../modal.css'

export default function UpdateModal( handleClose, show, children ) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log('show is', show)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button"onClick={handleClose()}>
          Close
        </button>
      </section>
    </div>
  );
}
