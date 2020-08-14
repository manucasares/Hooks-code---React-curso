import React, { useRef } from 'react'

import '../02-useEffect/formEffect.css'

export const FocusScreen = () => {

    const inputRef = useRef()


    const handleClick = ()=>{
        inputRef.current.select()

    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />

            <button 
                onClick={handleClick}
                className='btn btn-primary'>Focus
            </button>

        </div>

    )
}
