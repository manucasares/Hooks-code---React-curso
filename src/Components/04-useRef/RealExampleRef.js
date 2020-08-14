import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

import "../02-useEffect/formEffect.css";

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                onClick={() => setShow(!show)}
                className="btn btn-primary mt-5"
            >
                Show / Hide
            </button>
        </div>
    );
};
