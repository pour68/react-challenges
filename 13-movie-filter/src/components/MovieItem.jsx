import PropTypes from 'prop-types'

const MovieItem = (props) => {
    const { movie } = props;

    return (
        <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td className='movie__genres'>{movie.genres.map(genre => <span key={genre}>{genre}</span>)}</td>
        </tr>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object
}

export default MovieItem
