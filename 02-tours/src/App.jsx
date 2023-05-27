import { useEffect, useState } from 'react'
import './App.css'
import TourList from './components/TourList';
import { sendGetRequest } from './utils/fetchData';
import 'remixicon/fonts/remixicon.css'

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteTour = (id) => {
    const listOfDisplayedTour = tours.filter(tour => tour.id !== id);

    setTours(listOfDisplayedTour);
  }

  const handleRefresh = async () => {
    setLoading(true);
    const toursData = await sendGetRequest("https://course-api.com/react-tours-project");

    setTours(toursData);
    setLoading(false);
  }

  useEffect(() => {
    const fetchTours = async () => {
      await handleRefresh();
    }

    fetchTours();
  }, []);

  return (
    <div className='tour'>
      <div className='tour__container container'>
        <div className='tour__content'>
          <header className='tour__header'>
            <h1 className='title'>Our tours</h1>
            <div className='divider divider-25 divider-primary mb-4 mx-auto'></div>
          </header>

          <TourList tours={tours}
            loading={loading}
            onDeleteTour={handleDeleteTour}
            handleRefresh={handleRefresh} />
        </div>
      </div>
    </div>
  )
}

export default App
