import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
    const { categories, currentCatgeory, onCategoryChange } = props;
    const categoriesWithAll = [{ id: 0, title: "all" }, ...categories];

    return (<ul className="menu__category">
        {
            categoriesWithAll.map(category => <CategoryItem key={category.id}
                category={category}
                currentCatgeory={currentCatgeory}
                onCategoryChange={onCategoryChange} />)
        }
    </ul>);
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    currentCatgeory: PropTypes.string.isRequired
}

export default CategoryList;