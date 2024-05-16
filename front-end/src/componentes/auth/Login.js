import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import { CRMContext } from '../../context/CRMContext';

function Login(props) {
    const [credenciales, guardarCredenciales] = useState({});
    const [auth, guardarAuth] = useContext(CRMContext);

    const iniciarSesion = async e => {
        e.preventDefault();
        try {
            const respuesta = await clienteAxios.post('/users/login', credenciales);
            const { token } = respuesta.data;
            localStorage.setItem('token', token);

            guardarAuth({
                token,
                auth: true
            });

            Swal.fire(
                'Login Successful',
                'You have successfully logged in',
                'success'
            );

            props.history.push('/');
        } catch (error) {
            console.log(error);
            let errorMessage = 'There was an error';
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message;
            }
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: errorMessage
            });
        }
    };

    const leerDatos = e => {
        guardarCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="login">
            <h2>Login</h2>

            <div className="contenedor-formulario">
                <form onSubmit={iniciarSesion}>
                    <div className="campo">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email to Login"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <div className="campo">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password to Login"
                            required
                            onChange={leerDatos}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-verde btn-block"
                    />
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);
