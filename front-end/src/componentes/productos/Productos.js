import React, { useEffect, useState, useContext, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Producto from './Producto'; // Importa el componente Producto
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';
import { CRMContext } from '../../context/CRMContext';

function Productos(props) {
    const [productos, guardarProductos] = useState([]);
    const [auth, guardarAuth] = useContext(CRMContext);

    useEffect(() => {
        if (auth.token !== '') {
            const consultarAPI = async () => {
                try {
                    const productosConsulta = await clienteAxios.get('/products', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    guardarProductos(productosConsulta.data);
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

    if (!productos.length) return <Spinner />;

    const eliminarProductoDelEstado = id => {
        const nuevosProductos = productos.filter(producto => producto._id !== id);
        guardarProductos(nuevosProductos);
    };

    return (
        <Fragment>
            <h2>Productos</h2>
            <Link to={"/productos/nuevo"} className="btn btn-verde nvo-producto">
                <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>
            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto key={producto._id} producto={producto} eliminarProductoDelEstado={eliminarProductoDelEstado} />
                ))}
            </ul>
        </Fragment>
    );
}

export default withRouter(Productos);
