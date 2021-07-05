import './modal.css';

// Stateless, functional component
// children = props.children
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className="modal-main" onClick={e => e.stopPropagation()}>
                {children}
                <button className="close" onClick={handleClose}>
                    &#10006;
                </button>
            </div>
        </div>
    );
};

export default Modal;