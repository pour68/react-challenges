import { useEffect, useState } from 'react'
import './App.css'
import reviewArray from "./data/reviews";
import SliderActions from './components/SliderActions';
import SupriseMe from './components/SupriseMe';
import SlideItem from './components/SlideItem';
import 'remixicon/fonts/remixicon.css'

function App() {
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
    <div className='slide'>
      <div className="slide__container container">
        <div className="slide__content">
          <SlideItem review={review} />

          <SliderActions onSlideForward={handleSlideForward} onSlideBackward={handleSlideBackward} />

          <SupriseMe onSlideRandom={handleRandomSlide} />
        </div>
      </div>
    </div>
  )
}

export default App
