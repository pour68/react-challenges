import { useState, createContext } from "react";
import PropTypes from 'prop-types'
import { genreArray } from "../data/genres";

const GenreContext = createContext();

const GenreProvider = ({ children }) => {
    const [genres] = useState([{ id: 0, title: "all" }, ...genreArray]);

    return (
        <GenreContext.Provider value={{ genres }}>
            {children}
        </GenreContext.Provider>
    );
}

GenreProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { GenreContext, GenreProvider };