import PropTypes from "prop-types";

const Sidebar = (props) => {
    const { isSidebarToggle, onToggleSidebar } = props;

    return (<aside className={isSidebarToggle ? "sidebar active" : "sidebar"}>
        <i className="ri-close-fill fs-lg close-pos cursor-pointer" onClick={onToggleSidebar}></i>
        <nav className="sidebar__menu">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Home</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">About</a>
                </li>
                <li className="sidebar__item">
                    <a href="#" className="sidebar__link">Contact</a>
                </li>
            </ul>
        </nav>
    </aside>);
}

Sidebar.propTypes = {
    isSidebarToggle: PropTypes.bool,
    onToggleSidebar: PropTypes.func
}

export default Sidebar;