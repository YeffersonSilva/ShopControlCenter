import React from 'react';

function DetallesPedido({pedido}) {
    const {cliente} = pedido;

    return(
        <li className="pedido">
            <div className="info-pedido">
                <p className="id">ID: {pedido._id}</p>
                <p className="nombre">Cliente: {cliente.name} {cliente.surname}</p>

                <div className="articulos-pedido">
                    <p className="productos">Artículos Pedido:</p>
                    <ul>
                        {pedido.order.map(articulos => (
                            <li key={pedido._id+articulos.product._id}>
                                <p>{articulos.product.name} </p>
                                <p>Precio: ${articulos.product.price} </p>
                                <p>Cantidad: {articulos.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="total">Total: ${pedido.total} </p>
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Pedido
                </button>
            </div>
        </li>
    )
}

export default DetallesPedido;
