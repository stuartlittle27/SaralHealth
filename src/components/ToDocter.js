import React, { useEffect, useRef, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
function ToDocter() {

    const [symptoms, setSymptoms] = useState([])
    const [otherSymptomList, setOtherSymptomsList] = useState([])
    const [otherSymptoms, setOtherSymptoms] = useState([])
    const otherSymptomsInput = useRef()
    const navigate = useNavigate()
    // {
    //     name: 'headache',
    //     selected: false
    // },
    // {
    //     name: 'fever',
    //     selected: false
    // },
    // {
    //     name: 'nausea',
    //     selected: false
    // },
    // {
    //     name: 'vomiting',
    //     selected: false
    // }


    const location = useLocation();
    const MAX_DISPLAY_SYMPTOM = 25

    useEffect(() => {
        const patient = new URLSearchParams(location.search).get('patient');

        // axios symtoms loading here and object creation
        const data = ['headache', 'fever', 'nausea', 'vomiting', 'ulcers', 'knee-pain', 'headache', 'fever', 'nausea', 'vomiting', 'ulcers', 'knee-pain', 'headache', 'fever', 'nausea', 'vomiting', 'ulcers', 'knee-pain', 'headache', 'fever', 'nausea', 'vomiting', 'ulcers', 'knee-pain', 'headache', 'fever', 'nausea', 'vomiting', 'ulcers', 'knee-pain']
        const display = data.slice(0, MAX_DISPLAY_SYMPTOM)
        var temp = []
        display.forEach(d => {
            temp.push({ name: d, selected: false })
        });
        setSymptoms([...temp])
        // axios symtoms loading ends

    }, [])


    function handleSymptomPillClick(ind) {
        var arr = [...symptoms]
        if (!symptoms[ind].selected) {
            arr[ind].selected = true
            setSymptoms(arr)
        } else {
            arr[ind].selected = false
            setSymptoms(arr)
        }
        console.log(symptoms);
    }

    function handleOtherSymptomListChange(e) {
        const value = [...e.target.value];
        var regexBase = '.*'
        regexBase += value.join('.*')
        regexBase += '.*'
        const regex = new RegExp(regexBase)
        if (e.target.value !== '') {
            var temp = []
            symptoms.forEach(s => {
                if (regex.test(s.name))
                    temp.push(s.name)
            })
            setOtherSymptomsList([...temp])
        } else {
            setOtherSymptomsList([])
        }
        console.log(value);
    }

    function handleOtherSymptomListClick(symptomName) {
        console.log(symptomName, 'symtom name');
        var temp = [...otherSymptoms]
        temp.push({ name: symptomName, selected: true })
        setOtherSymptoms(temp)
        otherSymptomsInput.current.value = ''
        setOtherSymptomsList([])
        otherSymptomsInput.current.focus()
    }

    function handleOtherSymptomPillClick(ind) {
        var arr = otherSymptoms.filter((val, index) => index != ind)
        setOtherSymptoms([...arr])
    }

    function handleDoneClick(e) {
        var arr = symptoms.filter(s => s.selected)
        arr = [...arr, ...otherSymptoms]
        navigate('/prescribe', { state: { symptoms: arr } })
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light px-3">
                <span className="navbar-brand mx-3">Last Visit On: 12-05-2022</span>
                <span className="navbar-brand mx-3"><h2 className='display-5'>Patient Name </h2></span>
                <span className="navbar-brand mx-3">By: Dr. Arora</span>
            </nav>

            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='container'>
                            <h4 className='mt-2'>Add Symptoms</h4>
                            {
                                symptoms.map((s, index) => {
                                    return <span className={`badge rounded-pill bg-info text-dark px-2 symptom-pill ${s.selected ? 'selected' : ' '}`}
                                        onClick={() => {
                                            handleSymptomPillClick(index)
                                        }}>{s.name}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className='col-6'>
                        <input className="form-control mt-2" type="text" ref={otherSymptomsInput} placeholder="Other symptoms" aria-label="default input example" list='data' onChange={handleOtherSymptomListChange} />
                        <div className='datalist-wrapper'>
                            <ul className='datalist'>
                                {
                                    otherSymptomList.slice(0, 7).map((val, index) => {
                                        return <li className='datalist-item' onClick={() => handleOtherSymptomListClick(val)}>{val}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <h1 className='mt-2'>Loaded Symptoms</h1>
                        {
                            otherSymptoms.map((s, index) => {
                                return <span className={`badge rounded-pill bg-info text-dark px-2 symptom-pill ${s.selected ? 'selected' : ' '}`}
                                    onClick={() => { handleOtherSymptomPillClick(index) }}>{s.name}</span>
                            })
                        }
                    </div>

                </div>
            </div>

            <button type="button" className="btn btn-info docter-done" onClick={handleDoneClick}><i class="fa-solid fa-check fa-beat-fade"></i></button>

        </>
    )
}

export default ToDocter