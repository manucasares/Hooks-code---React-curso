import React, { useState } from "react";

const CounterApp = () => {
    const [{ counter1, counter2 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    });

    return (
        <>
            <h3> counter1: {counter1}</h3>
            <h3> counter2: {counter2}</h3>
            <button
                onClick={() => {
                    setCounter({ counter1: counter1 + 1, counter2 });
                }}
                className="btn btn-primary"
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;
