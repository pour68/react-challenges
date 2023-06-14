import { useContext } from "react"
import { GenreContext } from "../contexts/GenreContext";
import GenreItem from "./GenreItem";

const GenreList = () => {
    const { genres } = useContext(GenreContext);
    return (
        <ul className="genres list-group my-2">
            {genres.map(genre => <GenreItem key={genre.id} genre={genre} />)}
        </ul>
    )
}

export default GenreList

