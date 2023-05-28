import PropTypes from "prop-types";

const CategoryItem = (props) => {
    const { category, currentCatgeory, onCategoryChange } = props;

    return (<li className={currentCatgeory === category.title ? "menu__category__item active" : "menu__category__item"}
        onClick={() => onCategoryChange(category.title)}>
        {category.title}
    </li>);
}

CategoryItem.propTypes = {
    category: PropTypes.object,
    onCategoryChange: PropTypes.func,
    currentCatgeory: PropTypes.string

}

export default CategoryItem;