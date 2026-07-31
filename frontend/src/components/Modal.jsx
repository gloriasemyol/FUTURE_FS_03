function Modal({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 bg-espresso/70 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-offwhite rounded-2xl max-w-md w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-espresso text-offwhite w-8 h-8 rounded-full flex items-center justify-center hover:bg-coffee transition z-10"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;