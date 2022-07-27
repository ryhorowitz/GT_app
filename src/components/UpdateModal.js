import ReactDOM from 'react'

export default function UpdateModal({ open, children, onClose }) {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div>
        <button onClick={() => { onClose() }}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
