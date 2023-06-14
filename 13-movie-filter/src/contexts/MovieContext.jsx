import { useState, createContext } from "react";
import PropTypes from 'prop-types'
import { movieArray } from "../data/movies";
import { sortByStringColumnNameAsc, sortByStringColumnNameDesc } from "../utils/sortByColumn";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(movieArray);
    const [order, setOrder] = useState("asc");
    const [column, setColumn] = useState("id");
    const [genreName, setGenreName] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);

    const handlePageChange = (page) => setCurrentPage(page);

    const handleSorting = (columnName) => {
        let sortedMovies;
        if (order === "asc") {
            sortedMovies = sortByStringColumnNameAsc(columnName, movies);
            setOrder("desc");
        } else {
            sortedMovies = sortByStringColumnNameDesc(columnName, movies);
            setOrder("asc");
        }

        setMovies(sortedMovies);
        setColumn(columnName);
        setCurrentPage(1);
    }

    const handleFilterMovieByGenre = (genreTitle) => {
        if (genreTitle == "all") {
            setGenreName("all");

            setMovies(movieArray);
        } else {
            const filteredMovieByGenre = movieArray.filter(movieItem => movieItem.genres.includes(genreTitle));
            setGenreName(genreTitle);

            setMovies(filteredMovieByGenre);
        }
    }

    const handleSearchMovieByTitle = (query) => {
        let queryValue = query.trim().toLowerCase();
        setGenreName("all");

        if (queryValue === "") {
            setMovies(movieArray);
        } else {
            let searchedMovieTitle = movieArray.filter(movieItem => movieItem.title.includes(queryValue));
            setMovies(searchedMovieTitle);
        }
    }

    return (
        <MovieContext.Provider value={{ movies, handleFilterMovieByGenre, genreName, handleSearchMovieByTitle, handleSorting, currentPage, pageSize, handlePageChange, setMovies, order, column }}>
            {children}
        </MovieContext.Provider>
    );
}

MovieProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { MovieContext, MovieProvider };