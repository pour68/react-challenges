import PropTypes from "prop-types";

const SliderActions = (props) => {
    const { onSlideForward, onSlideBackward } = props;

    return (<div className="slide__action">
        <i className="ri-arrow-left-line" onClick={onSlideBackward}></i>
        <i className="ri-arrow-right-line" onClick={onSlideForward}></i>
    </div>);
}

SliderActions.propTypes = {
    onSlideForward: PropTypes.func.isRequired,
    onSlideBackward: PropTypes.func.isRequired
}

export default SliderActions;