import React from "react";
import { Link } from 'react-router-dom'


function NotFoundHeader() {
  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">404 Error</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              
              <li className="breadcrumb-item text-white active" aria-current="page">
                404 Error
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
    </div>
  );
}

export default NotFoundHeader;
