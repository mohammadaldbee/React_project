import React from 'react'

const Counter = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex align-items-center mb-4">
                            <div className="btn-lg-square bg-primary rounded-circle me-3">
                                <i className="fa fa-users text-white"></i>
                            </div>
                            <h1 className="mb-0" data-toggle="counter-up">3453</h1>
                        </div>
                        <h5 className="mb-3">Happy Customers</h5>
                        <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="d-flex align-items-center mb-4">
                            <div className="btn-lg-square bg-primary rounded-circle me-3">
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <h1 className="mb-0" data-toggle="counter-up">4234</h1>
                        </div>
                        <h5 className="mb-3">Project Done</h5>
                        <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="d-flex align-items-center mb-4">
                            <div className="btn-lg-square bg-primary rounded-circle me-3">
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h1 className="mb-0" data-toggle="counter-up">3123</h1>
                        </div>
                        <h5 className="mb-3">Awards Win</h5>
                        <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="d-flex align-items-center mb-4">
                            <div className="btn-lg-square bg-primary rounded-circle me-3">
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h1 className="mb-0" data-toggle="counter-up">1831</h1>
                        </div>
                        <h5 className="mb-3">Expert Workers</h5>
                        <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter