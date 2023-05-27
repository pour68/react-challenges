import PropTypes from 'prop-types';
import { useState } from 'react';

const TourItem = (props) => {
    const [isTextSliced, setIsTextSliced] = useState(true);

    const handleTextSlice = () => setIsTextSliced(prev => !prev);

    const { tour, onDeleteTour } = props;

    return (<li className='tour__item'>
        <figure className='tour__figure'>
            <img src={tour.image} alt={tour.name} />
            <figcaption>${tour.price}</figcaption>
        </figure>
        <article className='tour__info'>
            <h4>{tour.name}</h4>
            <p>
                {isTextSliced ? `${tour.info.slice(0, 125)} ...` : tour.info}
                <span onClick={handleTextSlice}>
                    {isTextSliced ? 'Read More' : 'Read Less'}
                </span>
            </p>

            <button onClick={() => onDeleteTour(tour.id)} className='btn btn-primary mt-2 mb-1'>Not Interested</button>
        </article>
    </li>);
}

TourItem.propTypes = {
    tour: PropTypes.object,
    isTextSliced: PropTypes.bool,
    onTextSlice: PropTypes.func,
    onDeleteTour: PropTypes.func
}

export default TourItem;