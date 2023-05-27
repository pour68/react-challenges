import PropTypes from 'prop-types';

const BuddyItem = (props) => {
    const { buddy } = props;

    return (<li className="birthdate__item">
        <figure className="birthdate__figure">
            <img src={buddy.image} alt={buddy.name} />
        </figure>
        <section className="birthdate__info">
            <h4>{buddy.name}</h4>
            <p>{buddy.age} years</p>
        </section>
    </li>);
}

BuddyItem.propTypes = {
    buddy: PropTypes.object.isRequired
}

export default BuddyItem;