import { useContext } from 'react';
import { SlideContext } from '../contexts/SlideContext';

const SliderActions = () => {
    const { handleSlideForward, handleSlideBackward } = useContext(SlideContext);

    return (<div className="slide__action">
        <i className="ri-arrow-left-line" onClick={handleSlideBackward}></i>
        <i className="ri-arrow-right-line" onClick={handleSlideForward}></i>
    </div>);
}

export default SliderActions;