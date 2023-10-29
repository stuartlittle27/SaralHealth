import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Medicine from './Medicine';
function TakePrescriptions() {

    const { state } = useLocation()
    const { symptoms } = state
    const navigate = useNavigate()
    const commonMedicines = [
        "Aspirin",
        "Ibuprofen",
        "Paracetamol (Acetaminophen)",
        "Amoxicillin",
        "Lisinopril",
        "Metformin",
        "Simvastatin",
        "Prednisone",
        "Levothyroxine",
        "Omeprazole",
        "Gabapentin",
        "Warfarin",
        "Metoprolol",
        "Atorvastatin (Lipitor)",
        "Hydrochlorothiazide",
        "Fluoxetine (Prozac)",
        "Citalopram (Celexa)",
        "Ciprofloxacin",
        "Alprazolam (Xanax)",
        "Diazepam (Valium)"
    ]
    const [medicines, setMedicines] = useState([])
    const [medNumber, setMedNumber] = useState([1])

    function handleAddMedicineClick(e){
        var arr = [...medNumber]
        arr.push(1)
        setMedNumber()
    }

    function handleDoneClick(e) {
        navigate('/pharmacy', { state: { medicines: medicines } })
    }
    return (
        <>
            <nav className="navbar navbar-light bg-light px-3">
                <div className='container-fluid justify-content-start prescribe-symptom-tab'>
                    <h2 style={{}}>Symptoms:</h2>
                    {
                        symptoms.map((s, index) => {
                            return <span className={`badge rounded-pill bg-info text-dark px-2 symptom-pill selected`}>{s.name}</span>
                        })
                    }
                </div>
            </nav>

            <div className='container mt-1'>
                <h1>Prescribtion</h1>
                {
                    symptoms.map((_,ind)=>{
                        return <Medicine medicines={medicines} setMedicines={setMedicines}/>
                    })
                }
            </div>
            {/* <div className='container d-flex justify-content-end mt-1'>
                <button type="button" class="btn btn-info" onClick={handleAddMedicineClick}>Add Medicine</button>
            </div> */}

            <button type="button" className="btn btn-info docter-done" onClick={handleDoneClick}><i class="fa-solid fa-check fa-beat-fade"></i></button>

        </>
    )
}

export default TakePrescriptions