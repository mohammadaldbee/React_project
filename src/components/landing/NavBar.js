import React from 'react'
import { useAuth } from '../auth'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <h2 className="m-0 text-primary">Solartec</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>

                    <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                    {/* <a href="project.html" className="nav-item nav-link">Project</a> */}




                    <Link to="/contact" className="nav-item nav-link">Contact</Link>

                    {auth.user && (<div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{auth.user.name}</a>
                        <div className="dropdown-menu bg-light m-0">
                            <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                            {
                                auth.user && (auth.user.role === "admin" ? <NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink> : null)
                            }
                            {
                                auth.user && (auth.user.role === "user" ? <NavLink to="/UserPage" className="dropdown-item">Contracts</NavLink> : null)

                            }
                            <button className="dropdown-item" onClick={() => {
                                auth.logout();
                                
                            }}>Sign out</button>
                        </div>
                    </div>)}
                    {!auth.user && (<NavLink to="/login" className=" rounded-0 py-4 px-lg-5 d-lg-block login">Login<i className="fa fa-arrow-right ms-3"></i></NavLink>
                    )}
                </div>

            </div>
        </nav>)
}

export default NavBar