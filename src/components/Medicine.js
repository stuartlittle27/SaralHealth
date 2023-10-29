import React, { useState } from 'react'

function Medicine({ medicines, setMedicines }) {

    const [med, setMed] = useState({})
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setMed({
            ...med,
            [name]: value
        })
    }

    function handleClick(e){
        var temp = [...medicines]
        temp.push(med)
        setMedicines(temp)
    }


    return (
        <div className='row mt-1 border border-2 rounded p-1'>
            <div className='col-6'>
                <input className="form-control" type="text" placeholder="Medicine" aria-label="default input example" onChange={handleChange} name='name' />
            </div>
            <div className='col-3'>
                <input className="form-control" type="text" placeholder="Times (1-0-1)" aria-label="default input example" onChange={handleChange} name='times' />
            </div>
            <div className='col-2'>
                <input className="form-control" type="text" placeholder="Dosage" aria-label="default input example" onChange={handleChange} name='dosage'/>
            </div>
            <div className='col-1'>
                <button type="button" className="btn btn-info" onClick={handleClick}><i class="fa-solid fa-check"></i></button>
            </div>
        </div>
    )
}

export default Medicine