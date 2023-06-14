import PropTypes from 'prop-types'
import { MovieContext } from '../contexts/MovieContext';
import { useContext, useState } from 'react';

const MovieSearch = () => {
    const [query, setQuery] = useState("");
    const { handleSearchMovieByTitle } = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSearchMovieByTitle(query);
        setQuery("");
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="input-group mb-3">
                <input type="search"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movie..." />
                <button type="submit" className="btn btn-outline-secondary">Search</button>
            </div>
        </form>
    )
}

MovieSearch.propTypes = {
    movie: PropTypes.object
}

export default MovieSearch