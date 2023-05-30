import reviewArray from "../data/reviews";
import { useState, createContext, useEffect } from "react";
import PropTypes from 'prop-types';

const SlideContext = createContext();

const SlideProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [review, setReview] = useState(reviewArray[index]);

    useEffect(() => {
        setReview(reviewArray[index]);
    }, [index]);

    const handleSlideForward = () => {
        if (index === (reviewArray.length - 1)) {
            setIndex(0);
            return;
        }

        setIndex(prev => prev + 1);
    }

    const handleSlideBackward = () => {
        if (index === 0) {
            setIndex(reviewArray.length - 1)
            return;
        }

        setIndex(prev => prev - 1);
    }

    const handleRandomSlide = () => {
        let randomIndex = Math.floor(Math.random() * reviewArray.length);

        setIndex(randomIndex);
    }

    return (
        <SlideContext.Provider
            value={{ review, index, setReview, handleSlideForward, handleSlideBackward, handleRandomSlide }}
        >
            {children}
        </SlideContext.Provider>
    );
}

SlideProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { SlideContext, SlideProvider };

