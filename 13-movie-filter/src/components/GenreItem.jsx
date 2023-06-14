import PropTypes from 'prop-types'
import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const GenreItem = (props) => {
    const { genre } = props;
    const { handleFilterMovieByGenre, genreName } = useContext(MovieContext);
    return (
        <li className={genre.title === genreName ? "list-group-item cursor-pointer active" : "list-group-item cursor-pointer"}
            onClick={() => handleFilterMovieByGenre(genre.title)}>
            {genre.title}
        </li>
    )
}

GenreItem.propTypes = {
    genre: PropTypes.object,
    genreTitle: PropTypes.string
}

export default GenreItem

