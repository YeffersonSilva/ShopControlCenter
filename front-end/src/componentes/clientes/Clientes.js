import React, { useEffect, useState, useContext, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Cliente from './Cliente';
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { CRMContext } from '../../context/CRMContext';

function Clientes(props) {
    const [clientes, guardarClientes] = useState([]);
    const [auth] = useContext(CRMContext);

    useEffect(() => {
        if (auth.token !== '') {
            const consultarAPI = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/clients', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    guardarClientes(clientesConsulta.data);
                } catch (error) {
                    console.log(error);
                    if (error.response && error.response.status === 500) {
                        props.history.push('/iniciar-sesion');
                    }
                }
            };
            consultarAPI();
        } else {
            props.history.push('/iniciar-sesion');
        }
    }, [auth.token, props.history]);

    if (!auth.auth) {
        props.history.push('/iniciar-sesion');
    }

    if (!clientes.length) return <Spinner />;

    return (
        <Fragment>
            <h2>Clientes</h2>
            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
                <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>
            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente key={cliente._id} cliente={cliente} />
                ))}
            </ul>
        </Fragment>
    );
}

export default withRouter(Clientes);
