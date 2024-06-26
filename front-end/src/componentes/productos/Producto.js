import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function Producto({ producto, eliminarProductoDelEstado }) {
    const { _id, name, price, image } = producto;

    const eliminarProducto = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then(result => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/products/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            eliminarProductoDelEstado(id);
                            Swal.fire(
                                'Eliminado',
                                res.data.message,
                                'success'
                            );
                        }
                    });
            }
        });
    };

    return (
        <li className="producto">
            <div className="info-producto">
                <p className="nombre">{name}</p>
                <p className="precio">$ {price}</p>
                {image && (
                    <img src={`http://localhost:5000/uploads/${image}`} alt="imagen" />
                )}
            </div>
            <div className="acciones">
                <Link to={`/productos/editar/${_id}`} className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Producto
                </Link>

                <button
                    type="button"
                    className="btn btn-rojo btn-eliminar"
                    onClick={() => eliminarProducto(_id)}
                >
                    <i className="fas fa-times"></i>
                    Eliminar Producto
                </button>
            </div>
        </li>
    );
}

export default Producto;
