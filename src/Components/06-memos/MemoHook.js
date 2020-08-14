import React, { useState, useMemo } from "react";
import useCounter from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

import "../02-useEffect/formEffect.css";

export const MemoHook = () => {
    const { counter, increment } = useCounter(2500);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <h1>
                Counter: {counter}
            </h1>
            <hr />

            <p> {memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
                className="btn btn-outline-primary ml-3"
            >
                Show / Hide : {JSON.stringify(show)}
            </button>
        </div>
    );
};
