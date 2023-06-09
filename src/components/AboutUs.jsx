import React from 'react';
import settings from '../assets/settings.svg';
import settings2 from '../assets/settings2.svg';
const AboutUs = () => {
    return (
        <section id="third__section" className="py-5">
            <div className="container d-flex justify-content-start">
                <div className="p-3 border-0 card d-flex justify-content-center align-items-center ">
                    <div className="text-center">
                        <h1>About Us</h1>
                        <p>
                            Our agency is dedicated to helping businesses of all
                            sizes achieve their online goals through effective
                            digital advertising strategies. With our expertise
                            and proven track record of success, we are confident
                            that we can help you unlock your growth potential
                            and take your business to the next level.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container py-3 d-flex justify-content-start">
                <div className="p-5 primary__card border-0 card ">
                    <div className="d-flex inside  justify-content-center align-items-center ">
                        <div className="me-4">
                            <img
                                className="w-100"
                                src={settings}
                                alt="setting"
                            />
                        </div>
                        <p className="primary__color">
                            At AdsGrowMedia, we offer a wide range of digital
                            advertising services to help businesses of all sizes
                            achieve their goals. Our services include Facebook
                            Ads, Google Ads, YouTube Ads, Display Ads, Social
                            Media Marketing and Remarketing. Whether you're
                            looking to increase website traffic, generate leads,
                            or boost sales, More Store Visits we have the
                            expertise and knowledge to create campaigns that
                            deliver results.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container py-3 d-flex justify-content-start">
                <div className="p-5 primary__card border-0 card  ">
                    <div className="d-flex inside justify-content-center align-items-center">
                        <div className="me-3">
                            <img
                                className="w-100"
                                src={settings2}
                                alt="setting"
                            />
                        </div>
                        <p className="primary__color">
                            We take a results-driven approach to Facebook and
                            Google Ads management, starting with a comprehensive
                            analysis of your business, target audience, and
                            competition. From there, we develop a customized
                            strategy and create high-converting ad copy and
                            visuals that resonate with your audience. We then
                            launch, monitor, and optimize your campaigns for
                            maximum ROI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
