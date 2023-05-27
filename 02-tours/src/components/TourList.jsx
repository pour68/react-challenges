import Loading from './Loading';
import TourItem from './TourItem';
import PropTypes from 'prop-types';

const TourList = (props) => {
    const { tours, loading, onDeleteTour, handleRefresh } = props;

    if (!loading && tours.length === 0)
        return <div className='tour__empty'>
            <h1>&ldquo;No Tour Left&ldquo;</h1>
            <button className='btn btn-primary ml-2' onClick={handleRefresh}>
                <i className="ri-restart-fill"></i> Refresh
            </button>
        </div>;

    return loading ? <Loading />
        : (<ul className='tour__list'>
            {tours.map(tour => <TourItem key={tour.id} tour={tour} onDeleteTour={onDeleteTour} />)}
        </ul>);
}

TourList.propTypes = {
    tours: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onDeleteTour: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired
}

export default TourList;