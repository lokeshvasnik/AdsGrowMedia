import React from 'react';

const Cards = () => {
    return (
        <section id="second__section" className="d-flex flex-column">
            <div className="container my-5">
                <div className="row py-lg-5 first__box ">
                    <div className="col-lg-4 d-flex flex-column justify-content-center ">
                        <div className="cardBox d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <img
                                    className="my-5 card__img hidden"
                                    src="https://assets.cdn.filesafe.space/x0N8K0M9cXLQQc087Z2v/media/64258a398f356e55f8a602b5.png"
                                    alt="image"
                                />
                            </div>
                            <div className="text-center">
                                <p className="primary__color">Our Approach</p>
                                <p className="p-3 primary__color">
                                    At AdsGrowMedia, we believe in taking a
                                    holistic approach to digital advertising.
                                    This means that we take the time to
                                    understand your business goals, target
                                    audience, and competition in order to
                                    develop a customized strategy that is
                                    tailored to your unique needs. We also
                                    believe in ongoing optimization and testing
                                    to ensure that your campaigns are always
                                    performing at their best.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column justify-content-center ">
                        <div className="cardBox d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <img
                                    className="my-5 card__img hidden"
                                    src="https://assets.cdn.filesafe.space/x0N8K0M9cXLQQc087Z2v/media/64258ab641878ffffcd10677.png"
                                    alt="image"
                                />
                            </div>
                            <div className="text-center">
                                <p className="primary__color py-2">
                                    Our Results
                                </p>
                                <p className="p-3 primary__color">
                                    We are proud of the results we have achieved
                                    for our clients. Our campaigns have helped
                                    businesses of all sizes increase website
                                    traffic, generate leads, and boost sales. We
                                    are constantly tracking and analyzing the
                                    performance of our campaigns to ensure that
                                    we are delivering the best possible results
                                    for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-column justify-content-center ">
                        <div className="cardBox d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <img
                                    className="my-5 card__img hidden"
                                    src="https://assets.cdn.filesafe.space/x0N8K0M9cXLQQc087Z2v/media/64258b2ff2c7c242b045910d.png"
                                    alt="image"
                                />
                            </div>
                            <div className="text-center">
                                <p className="primary__color ">Our Mission</p>
                                <p className="p-3 primary__color">
                                    Our mission at AdsGrowMedia is to help
                                    businesses achieve their digital advertising
                                    goals through effective and efficient
                                    campaigns. We believe that digital
                                    advertising should be accessible to all
                                    businesses, regardless of size or budget,
                                    and we are committed to helping our clients
                                    succeed through our expertise, dedication,
                                    and passion for digital advertising.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;
