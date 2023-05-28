import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import NoFoodFound from "./NoFoodFound";

const MenuList = (props) => {
    const { menu } = props;

    return menu.length === 0 ? <NoFoodFound /> : (<ul className="menu__list">
        {menu.map(menuItem => <MenuItem key={menuItem.id} menuItem={menuItem} />)}
    </ul>);
}

MenuList.propTypes = {
    menu: PropTypes.array.isRequired
}

export default MenuList;