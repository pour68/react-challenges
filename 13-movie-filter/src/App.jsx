import './App.css'
import GenreList from './components/GenreList'
import MovieSearch from './components/MovieSearch'
import MovieList from './components/movieList'

function App() {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className='col-md-6 col-lg-3'>
            <GenreList />
          </div>
          <div className='col-md-6 col-lg-9'>
            <MovieSearch />

            <div className='responsive-table'>
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
