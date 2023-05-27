import PropTypes from 'prop-types';

const BuddyListTitle = (props) => {
    const { buddiesCount } = props;

    return (<header className="mb-4">
        <h1 className="title">{buddiesCount} Birthdays Today</h1>
        <div className="divider divider-50 divider-primary"></div>
    </header>);
}

BuddyListTitle.propTypes = {
    buddiesCount: PropTypes.number.isRequired
}

export default BuddyListTitle;