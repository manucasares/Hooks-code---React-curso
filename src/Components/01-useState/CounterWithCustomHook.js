import React from "react";
import useCounter from "../../hooks/useCounter";

import './counter.css'

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset}  = useCounter(100)

    return (
        <>
            <h2>Counter With Hook: {state}</h2>

            <button onClick = { ()=> increment(2) }
            className="btn btn-success mr-3"> +1 </button>

            <button onClick = { reset }
            className="btn btn-warning mr-3"> Reset </button>

            <button onClick = { ()=> decrement(2) }
            className="btn btn-danger"> -1 </button>
        </>
    );
};

export default CounterWithCustomHook;
