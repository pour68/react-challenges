import PropTypes from 'prop-types'
import _ from "lodash";

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;

    let pagesCount = itemsCount / pageSize;
    if (Math.ceil(pagesCount) === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination pagination-sm">
                {
                    pages.map(page => <li
                        key={page}
                        className={currentPage === page ? "page-item cursor-pointer active" : "page-item cursor-pointer"} onClick={() => onPageChange(page)}>
                        <a className="page-link" >{page}</a>
                    </li>)
                }
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
