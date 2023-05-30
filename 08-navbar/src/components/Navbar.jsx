import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleToggleMenu = () => setShow(prev => !prev);

    return (<div className="navbar">
        <div className="navbar__head">
            <div className="navbar__logo">
                <a href="#" className="navbar__logo__link">
                    Pouria <span className="navbar__logo__link--green">Nayeb Ab.</span>
                </a>
            </div>

            <div className="navbar__hamburger" onClick={handleToggleMenu}>
                <i className={show ? "ri-close-fill" : "ri-menu-fill"}></i>
            </div>
        </div>

        <nav className={show ? "navbar__menu active" : "navbar__menu"}>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">About</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Contact</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Services</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Blog</a>
                </li>
            </ul>
        </nav>

        <nav className={show ? "navbar__social active" : "navbar__social"}>
            <a href="https://youtube.com" className="navbar__social__link">
                <i className="ri-youtube-fill"></i>
            </a>
            <a href="https://twitter.com" className="navbar__social__link">
                <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://facebook.com" className="navbar__social__link">
                <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://github.com" className="navbar__social__link">
                <i className="ri-github-fill"></i>
            </a>
        </nav>
    </div>);
}

export default Navbar;