import { useContext } from 'react';
import { SlideContext } from '../contexts/SlideContext';

const SupriseMe = () => {
    const { handleRandomSlide } = useContext(SlideContext);

    return (<div className="slide__suprise">
        <button className="btn btn-primary text-capitalize" onClick={handleRandomSlide}>Suprise me</button>
    </div>);
}

export default SupriseMe;