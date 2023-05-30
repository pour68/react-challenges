import './App.css'
import SlideItem from './components/SlideItem'
import SliderActions from './components/SliderActions';
import SupriseMe from './components/SupriseMe';

function App() {
  return (
    <>
      <div className='slide'>
        <div className="slide__container container">
          <div className="slide__content">
            <SlideItem />
            <SliderActions />
            <SupriseMe />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
