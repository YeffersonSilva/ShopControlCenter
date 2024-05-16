import React, { useState, useEffect, Fragment } from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';

function EditarProducto(props) {
    const { id } = props.match.params;
    const [producto, guardarProducto] = useState({
        name: '',
        price: '',
        image: ''
    });
    const [archivo, guardarArchivo] = useState('');

    useEffect(() => {
        const consultarAPI = async () => {
            const productoConsulta = await clienteAxios.get(`/products/${id}`);
            guardarProducto(productoConsulta.data);
        };

        consultarAPI();
    }, [id]);

    const editarProducto = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', producto.name);
        formData.append('price', producto.price);
        formData.append('image', archivo);

        try {
            const res = await clienteAxios.put(`/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                Swal.fire(
                    'Editado Correctamente',
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

    const { name, price, image } = producto;

    if (!name) return <Spinner />;

    return (
        <Fragment>
            <h2>Editar Producto</h2>

            <form onSubmit={editarProducto}>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre Producto"
                        name="name"
                        onChange={leerInformacionProducto}
                        defaultValue={name}
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
                        defaultValue={price}
                    />
                </div>

                <div className="campo">
                    <label>Imagen:</label>
                    {image && (
                        <img src={`http://localhost:5000/${image}`} alt="imagen" width="300" />
                    )}
                    <input
                        type="file"
                        name="image"
                        onChange={leerArchivo}
                    />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Editar Producto" />
                </div>
            </form>
        </Fragment>
    );
}

export default withRouter(EditarProducto);
