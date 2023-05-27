import { useEffect, useState } from 'react'
import './App.css'
import TourList from './components/TourList';
import { sendGetRequest } from './utils/fetchData';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteTour = (id) => {
    const listOfDisplayedTour = tours.filter(tour => tour.id !== id);

    setTours(listOfDisplayedTour);
  }

  useEffect(() => {
    const fetchTours = async () => {
      const toursData = await sendGetRequest("https://course-api.com/react-tours-project");

      setTours(toursData);
      setLoading(false);
    }

    fetchTours();
  }, []);

  return (
    <div className='tour'>
      <div className='tour__container container'>
        <div className='tour__content'>
          <header className='tour__header'>
            <h1 className='title'>Our tours</h1>
            <div className='divider divider-25 divider-primary mx-auto'></div>
          </header>

          <TourList tours={tours} loading={loading} onDeleteTour={handleDeleteTour} />
        </div>
      </div>
    </div>
  )
}

export default App
