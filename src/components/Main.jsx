import React from 'react';
import home from '../assets/home.png';

const Main = () => {
    return (
        <>
            <section id="section" className="container-fluid">
                <div className="container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 d-flex flex-column justify-content-center ">
                            <h1 className="fw-bold hidden primary__color">
                                Welcome to AdsGrowMedia
                            </h1>
                            <p className="w-50 primary__color">
                                Your Trusted Partner For Facebook Ads And Google
                                Ads
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center hidden ">
                            <img className="w-50" src={home} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#5965FF"
                    fillOpacity="1"
                    d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,80C672,117,768,203,864,240C960,277,1056,267,1152,229.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </>
    );
};

export default Main;
