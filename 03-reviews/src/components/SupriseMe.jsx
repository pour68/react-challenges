import PropTypes from "prop-types";

const SupriseMe = (props) => {
    const { onSlideRandom } = props;

    return (<div className="slide__suprise">
        <button className="btn btn-primary text-capitalize" onClick={onSlideRandom}>Suprise me</button>
    </div>);
}

SupriseMe.propTypes = {
    onSlideRandom: PropTypes.func.isRequired
}

export default SupriseMe;