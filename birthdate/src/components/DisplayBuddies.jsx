import PropTypes from 'prop-types';

const DisplayBuddies = (props) => {
    const { onDisplayBodyList } = props;

    return (<button className="btn text-capitalize"
        onClick={onDisplayBodyList}>
        Show all
    </button>);
}

DisplayBuddies.propTypes = {
    onDisplayBodyList: PropTypes.func
}

export default DisplayBuddies;