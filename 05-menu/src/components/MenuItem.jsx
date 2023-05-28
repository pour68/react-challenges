import PropTypes from "prop-types";

const MenuItem = (props) => {
    const { menuItem } = props;

    return (<li className="menu__item">
        <figure className="menu__figure">
            <img src={menuItem.img} alt={menuItem.title} />
            <figcaption>{menuItem.category}</figcaption>
        </figure>
        <div className="menu__info">
            <section className="menu__data">
                <h4>{menuItem.title}</h4>
                <span>${menuItem.price}</span>
            </section>
            <p>{menuItem.desc}</p>
        </div>
    </li>);
}

MenuItem.propTypes = {
    menuItem: PropTypes.object
}

export default MenuItem;