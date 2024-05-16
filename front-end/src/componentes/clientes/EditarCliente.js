import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';

function EditarCliente(props) {
    const { id } = props.match.params;

    const [cliente, datosCliente] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: ''
    });

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const clienteConsulta = await clienteAxios.get(`/clients/${id}`);
                datosCliente(clienteConsulta.data);
            } catch (error) {
                console.log(error);
            }
        };
        consultarAPI();

        // Cleanup function to avoid memory leaks
        return () => {
            datosCliente({
                nombre: '',
                apellido: '',
                empresa: '',
                email: '',
                telefono: ''
            });
        };
    }, [id]);

    const actualizarState = e => {
        datosCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const actualizarCliente = e => {
        e.preventDefault();
        clienteAxios.put(`/clients/${cliente._id}`, cliente)
            .then(res => {
                if (res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    });
                } else {
                    Swal.fire(
                        'Correcto',
                        'Se actualizó Correctamente',
                        'success'
                    );
                }
                props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',
                    text: 'No se pudo actualizar el cliente'
                });
            });
    };

    const validarCliente = () => {
        const { nombre, apellido, email, empresa, telefono } = cliente;
        return !nombre || !apellido || !email || !empresa || !telefono || !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;
    };

    return (
        <Fragment>
            <h2>Editar Cliente</h2>
            <form onSubmit={actualizarCliente}>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre Cliente"
                        name="nombre"
                        onChange={actualizarState}
                        value={cliente.nombre || ''}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input
                        type="text"
                        placeholder="Apellido Cliente"
                        name="apellido"
                        onChange={actualizarState}
                        value={cliente.apellido || ''}
                    />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input
                        type="text"
                        placeholder="Empresa Cliente"
                        name="empresa"
                        onChange={actualizarState}
                        value={cliente.empresa || ''}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email Cliente"
                        name="email"
                        onChange={actualizarState}
                        value={cliente.email || ''}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        placeholder="Teléfono Cliente"
                        name="telefono"
                        onChange={actualizarState}
                        value={cliente.telefono || ''}
                    />
                </div>

                <div className="enviar">
                    <input
                        type="submit"
                        className="btn btn-azul"
                        value="Guardar Cambios"
                        disabled={validarCliente()}
                    />
                </div>
            </form>
        </Fragment>
    );
}

export default withRouter(EditarCliente);
