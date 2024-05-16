import React, { useState, Fragment } from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';

function NuevoProducto(props) {
    const [producto, guardarProducto] = useState({
        name: '',
        price: ''
    });
    const [archivo, guardarArchivo] = useState('');

    const agregarProducto = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', producto.name);
        formData.append('price', producto.price);
        formData.append('image', archivo);

        try {
            const res = await clienteAxios.post('/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                Swal.fire(
                    'Agregado Correctamente',
                    res.data.message,
                    'success'
                );
            }

            props.history.push('/productos');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            });
        }
    };

    const leerInformacionProducto = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const leerArchivo = e => {
        guardarArchivo(e.target.files[0]);
    };

    return (
        <Fragment>
            <h2>Nuevo Producto</h2>

            <form onSubmit={agregarProducto}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre Producto"
                        name="name"
                        onChange={leerInformacionProducto}
                    />
                </div>

                <div className="campo">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        min="0.00"
                        step="0.01"
                        placeholder="Precio"
                        onChange={leerInformacionProducto}
                    />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={leerArchivo}
                    />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Agregar Producto" />
                </div>
            </form>
        </Fragment>
    );
}

export default withRouter(NuevoProducto);
