import React from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

function DetallesPedido({ pedido, eliminarPedidoDelEstado }) {
    const { _id, client, order, total } = pedido;

    const eliminarPedido = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un pedido eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then(result => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/orders/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            eliminarPedidoDelEstado(id);
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
        <li className="pedido">
            <div className="info-pedido">
                <p className="id">ID: {_id}</p>
                <p className="nombre">Cliente: {client ? `${client.name} ${client.surname}` : 'Cliente no disponible'}</p>
                <p className="total">Total: ${total}</p>
                <div className="productos-pedido">
                    <p className="productos">Productos:</p>
                    <ul>
                        {order.map(producto => (
                            <li key={producto.product ? producto.product._id : Math.random()}>
                                <p>{producto.product ? producto.product.name : 'Producto no disponible'} - {producto.quantity} unidades</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-rojo btn-eliminar"
                    onClick={() => eliminarPedido(_id)}
                >
                    <i className="fas fa-times"></i>
                    Eliminar Pedido
                </button>
            </div>
        </li>
    );
}

export default DetallesPedido;
