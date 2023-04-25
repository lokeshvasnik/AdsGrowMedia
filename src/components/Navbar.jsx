import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <div id="section" className="container-fluid">
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <Link class="navbar-brand w-25" href="#">
                        <img className="w-25" src={logo} alt="logo" />
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link cool-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link cool-link"
                                    to="/facebook"
                                >
                                    Facebook Ads
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link cool-link"
                                    to="/google"
                                >
                                    Google Ads
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link cool-link"
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
