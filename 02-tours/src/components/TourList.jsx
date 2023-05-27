import Loading from './Loading';
import TourItem from './TourItem';
import PropTypes from 'prop-types';

const TourList = (props) => {
    const { tours, loading, onDeleteTour } = props;

    if (!loading && tours.length === 0)
        return <h3 className='tour__empty'>No Tour Found</h3>;

    return loading ? <Loading />
        : (<ul className='tour__list'>
            {tours.map(tour => <TourItem key={tour.id} tour={tour} onDeleteTour={onDeleteTour} />)}
        </ul>);
}

TourList.propTypes = {
    tours: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onDeleteTour: PropTypes.func.isRequired
}

export default TourList;