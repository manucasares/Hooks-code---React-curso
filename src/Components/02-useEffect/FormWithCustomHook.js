import React, { useEffect } from "react";

import "./formEffect.css";
import { useForm } from "../../hooks/useForm";

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("Email cambió!");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <form onSubmit={handleSubmit} className="form-group">
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Tu email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleInputChange}
                />
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default FormWithCustomHook;
