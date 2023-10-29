import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Login() {

    const [delay, setDelay] = useState(100)
    const [result, setResult] = useState('')

    function handleScan(data) {
        setResult(data)
        console.log(data);
    }

    function handleError(err) {
        console.log(err);
    }

    return (
        <div className='container'>
            <div class="h-100 d-flex align-items-center justify-content-center flex-column">
                {
                    !result && <div className='qr-box'>
                        <QrReader
                            delay={delay}
                            style={{ height: 370, width: 494 }}
                            onError={handleError}
                            onScan={handleScan}
                        />
                        <h1 className='display-3'>Scan your ABHA QR here</h1>
                    </div>
                }
                {
                    result && <p className='display-4 mt-3' style={{ width: '90%', overflowWrap: 'break-word', whiteSpace: 'pre-line' }} >{result.text}</p>
                }
                {
                    result && <Link className="btn btn-primary container-fluid m-3 p-3" to={{pathname:'/todocter',search:`?patient=${result.text.split('\n')[0]}`}} role="button" style={{ width: '70%' }}>Procced</Link>
                }
            </div>
        </div>
    )
}

export default Login