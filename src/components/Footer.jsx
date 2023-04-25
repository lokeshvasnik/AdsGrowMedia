import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#5965FF"
                    fill-opacity="1"
                    d="M0,0L48,32C96,64,192,128,288,176C384,224,480,256,576,224C672,192,768,96,864,53.3C960,11,1056,21,1152,53.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <footer id="fifth__section">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="primary__color">Contact Us</h2>
                            <span className="primary__color text-center">
                                Office Address: 155, Sanjay Nagar, Ghaziabad,
                                Uttar Pradesh 201002
                            </span>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center  text-cetner">
                            <ul className="d-flex flex-column justify-content-center align-items-center">
                                <NavLink className="nav-link mb-2 cool-link">
                                    Home
                                </NavLink>
                                <NavLink className="nav-link mb-2 cool-link">
                                    Facebook Ads
                                </NavLink>
                                <NavLink className="nav-link mb-2 cool-link">
                                    Google Ads
                                </NavLink>
                                <NavLink className="nav-link mb-2 cool-link">
                                    Contact Us
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
