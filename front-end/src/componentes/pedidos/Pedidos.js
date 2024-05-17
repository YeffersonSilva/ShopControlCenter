import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import DetallesPedido from './DetallesPedido';

function Pedidos() {
    const [pedidos, guardarPedidos] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const resultado = await clienteAxios.get('/orders');
            guardarPedidos(resultado.data);
        };

        consultarAPI();
    }, []);

    const eliminarPedidoDelEstado = id => {
        const nuevosPedidos = pedidos.filter(pedido => pedido._id !== id);
        guardarPedidos(nuevosPedidos);
    };

    return (
        <Fragment>
            <h2>Pedidos</h2>

            <ul className="listado-pedidos">
                {pedidos.map(pedido => (
                    <DetallesPedido 
                        key={pedido._id}
                        pedido={pedido}
                        eliminarPedidoDelEstado={eliminarPedidoDelEstado}
                    />
                ))}
            </ul>
        </Fragment>
    );
}

export default Pedidos;
