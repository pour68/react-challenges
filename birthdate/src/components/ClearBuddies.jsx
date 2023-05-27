import PropTypes from 'prop-types';

const ClearBuddies = (props) => {
    const { onClearBuddyList } = props;

    return (<button className="btn btn-primary text-capitalize"
        onClick={onClearBuddyList}>
        Clear all
    </button>);
}

ClearBuddies.propTypes = {
    onClearBuddyList: PropTypes.func
}

export default ClearBuddies;