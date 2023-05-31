import PropTypes from "prop-types";

const Modal = (props) => {
    const { isModalToggle, onModalToggle } = props;

    return (<div className={isModalToggle ? "modal active" : "modal"}>
        <div className="modal__content">
            <header className="modal__header">
                <h2>Modal title</h2>
                <i className="ri-close-fill fs-lg cursor-pointer" onClick={onModalToggle}></i>
            </header>
            <div className="modal__body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, provident eius? Vero, eum. Velit, fugiat. Consectetur perferendis alias culpa, neque consequuntur fuga quae est, sapiente magnam ipsa repudiandae, voluptatem eveniet!</p>
            </div>
        </div>
    </div>);
}

Modal.propTypes = {
    isModalToggle: PropTypes.bool,
    onModalToggle: PropTypes.func
}

export default Modal;