import React, { useState } from 'react'

import './formEffect.css'

const SimpleForm = () => {

    const [formValues, setFormValues] = useState({
        name : '',
        email: '',
        password : ''
    })

    const {name, email, password} = formValues;


    const handleInputChange = () => {

        setFormValues( {
            ...formValues,
            
        })

    }


    return (
        <div className='form-group'>
            <input
                type = 'text'
                className = 'form-control'
                placeholder = 'Tu nombre'
                value = {name}
            />
            <input 
                type = 'email'
                className = 'form-control'
                placeholder = 'Tu email'
                value = {email}
            />
            <input 
                type = 'password'
                className = 'form-control'
                placeholder = 'Contraseña'
                value = {password}
            />
            <button className = 'btn btn-primary'>Submit</button>
        </div>
    )
}

export default SimpleForm
