import React from 'react'
import docter1 from '../images/docter1.png'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Welcome() {
    return (<div className="container">
        <h1 className='display-2'>
            Welcome to SARALATA
        </h1>
        <p> A centralized sytem for healthcare management</p>
        <div className="row">   
            <div className="col-6">
                <img src={docter1} className="rounded mx-auto d-block img-fluid img-thumbnail" />
            </div>
            <div className="col-6">
                <div className='mt-3'>
                    <div className='container-fluid'>
                        <Link className="btn btn-primary container-fluid m-3 p-3" to="/login" role="button" >Login</Link>
                    </div>
                    <div className='container-fluid'>
                        <Link className="btn btn-outline-primary container-fluid m-3 p-3" to="/register" role="button" >Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Welcome