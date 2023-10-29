import React from 'react'
import { useLocation } from 'react-router-dom'

function Pharmacy() {

    const { state } = useLocation()
    const { medicines } = state

    console.log(medicines);
    return (
        <>
            <nav className="navbar navbar-light bg-light px-3">
                <span className="navbar-brand mx-3">Last Visit On: 12-05-2022</span>
                <span className="navbar-brand mx-3"><h2 className='display-5'>Patient name</h2></span>
                <span className="navbar-brand mx-3">By: Dr. Arora</span>
            </nav>

            <div className='container'>

                <h1>Your Medicenes</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Medicine</th>
                            <th scope="col">Times</th>
                            <th scope="col">Dosage</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicines.map((med, ind) => {
                                return (
                                    <tr>
                                        <th scope="row">{ind+1}</th>
                                        <td>{med.name}</td>
                                        <td>{med.times}</td>
                                        <td>{med.dosage}</td>
                                        <td>Rs. 50</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pharmacy