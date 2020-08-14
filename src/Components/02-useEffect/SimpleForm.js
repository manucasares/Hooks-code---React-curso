import React, { useState } from "react";

import "./formEffect.css";

const SimpleForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    return (
        <div className="form-group">
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
            <button className="btn btn-primary">Submit</button>
        </div>
    );
};

export default SimpleForm;
