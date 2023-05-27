import BuddyItem from "./BuddyItem";
import PropTypes from 'prop-types';

const BuddyList = (props) => {
    const { buddies } = props;

    return (<ul className="birthdate__list">
        {
            buddies.map(buddy => (<BuddyItem key={buddy.id} buddy={buddy} />))
        }
    </ul>);
}

BuddyList.propTypes = {
    buddies: PropTypes.array.isRequired
}

export default BuddyList;