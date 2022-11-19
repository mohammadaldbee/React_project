import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Slider = () => {
    return (
        <div className="container-fluid p-0 pb-5 wow fadeIn" >
            <OwlCarousel items={1}
                loop={true}
                autoplay={true}
                >
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="./img/Formulation-of-legal-contracts.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/261ltext.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/fgdc.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>

        </div>
    )
}

export default Slider