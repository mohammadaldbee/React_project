import React from 'react'

const Container = (props) => {
    return (
        <div className='container'>
            <div className='row mt-5 md-5'>
                <div className='col-6' >
                    <img src="img/employee.png" alt="employee" style={{ height: "100%" }} className="img-fluid" />
                </div>

                {props.children}
            </div>

        </div>
    )
}

export default Container