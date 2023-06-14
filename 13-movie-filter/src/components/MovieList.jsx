import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieItem from "./MovieItem"
import Pagination from "./Pagination";
import paginate from "../utils/paginate";
import { movieArray } from "../data/movies";

const MovieList = () => {
    const { movies, handleSorting, currentPage, handlePageChange, pageSize, setMovies, order, column } = useContext(MovieContext);
    let paginatedMovies = paginate(movies, currentPage, pageSize);

    return (
        <>
            {(movies.length === 0 || movies.length < movieArray.length) && <button
                className="btn btn-primary" onClick={() => setMovies(movieArray)}>
                <i className="ri-grid-fill"></i> Display All
            </button>}
            <table className="movies table table-striped table-bordered my-2">
                <thead>
                    <tr>
                        <th onClick={() => handleSorting("id")} className="cursor-pointer">
                            <div className="d-flex justify-content-between">
                                <span>ID</span>

                                {order === "asc" && column === "id" ? <i className="ri-sort-asc"></i> : <i className="ri-sort-desc"></i>}
                            </div>
                        </th>
                        <th onClick={() => handleSorting("title")} className="cursor-pointer">
                            <div className="d-flex justify-content-between">
                                <span>Title</span>

                                {order === "asc" && column === "title" ? <i className="ri-sort-asc"></i> : <i className="ri-sort-desc"></i>}
                            </div>
                        </th>
                        <th>Genres</th>
                    </tr>
                </thead>

                <tbody>
                    {movies.length === 0 && <tr><td colSpan={3}>No Result Found</td></tr>}
                    {paginatedMovies && paginatedMovies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
                </tbody>
            </table>

            <Pagination itemsCount={movies.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange} />
        </>
    )
}

export default MovieList
