import React, { useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import FormBuscarProducto from './FormBuscarProducto';
import FormCantidadProducto from './FormCantidadProducto';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function NuevoPedido(props) {
    const { id } = props.match.params;

    const [cliente, guardarCliente] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    const [productos, guardarProductos] = useState([]);
    const [total, guardarTotal] = useState(0);

    useEffect(() => {
        const consultarAPI = async () => {
            const resultado = await clienteAxios.get(`/clients/${id}`);
            guardarCliente(resultado.data);
        };

        consultarAPI();
        actualizarTotal();
    }, [productos, id]);

    const buscarProducto = async e => {
        e.preventDefault();
        const resultadoBusqueda = await clienteAxios.post(`/products/search`, { query: busqueda });

        if (resultadoBusqueda.data.length > 0) {
            let productoResultado = resultadoBusqueda.data[0];
            productoResultado.product = productoResultado._id;
            productoResultado.cantidad = 0;
            guardarProductos([...productos, productoResultado]);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No Results',
                text: 'No products found'
            });
        }
    };

    const leerDatosBusqueda = e => {
        guardarBusqueda(e.target.value);
    };

    const restarProductos = i => {
        const todosProductos = [...productos];
        if (todosProductos[i].cantidad === 0) return;
        todosProductos[i].cantidad--;
        guardarProductos(todosProductos);
    };

    const aumentarProductos = i => {
        const todosProductos = [...productos];
        todosProductos[i].cantidad++;
        guardarProductos(todosProductos);
    };

    const eliminarProductoPedido = id => {
        const todosProductos = productos.filter(producto => producto.product !== id);
        guardarProductos(todosProductos);
    };

    const actualizarTotal = () => {
        if (productos.length === 0) {
            guardarTotal(0);
            return;
        }
        let nuevoTotal = 0;
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.price));
        guardarTotal(nuevoTotal);
    };

    const realizarPedido = async e => {
        e.preventDefault();
        const { id } = props.match.params;

        const pedido = {
            client: id,
            order: productos,
            total: total
        };

        const resultado = await clienteAxios.post(`/orders`, pedido);

        if (resultado.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: resultado.data.message
            });
            props.history.push('/pedidos');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Hubo un Error',
                text: 'Vuelva a intentarlo'
            });
        }
    };

    return (
        <Fragment>
            <h2>Nuevo Pedido</h2>

            <div className="ficha-cliente">
                <h3>Datos de Cliente</h3>
                <p>Nombre: {cliente.name} {cliente.surname}</p>
                <p>Teléfono: {cliente.phone}</p>
            </div>

            <FormBuscarProducto
                buscarProducto={buscarProducto}
                leerDatosBusqueda={leerDatosBusqueda}
            />

            <ul className="resumen">
                {productos.map((producto, index) => (
                    <FormCantidadProducto
                        key={producto.product}
                        producto={producto}
                        restarProductos={restarProductos}
                        aumentarProductos={aumentarProductos}
                        eliminarProductoPedido={eliminarProductoPedido}
                        index={index}
                    />
                ))}
            </ul>

            <p className="total">Total a Pagar: <span>$ {total}</span> </p>

            {total > 0 ? (
                <form onSubmit={realizarPedido}>
                    <input type="submit" className="btn btn-verde btn-block" value="Realizar Pedido" />
                </form>
            ) : null}
        </Fragment>
    );
}

export default withRouter(NuevoPedido);
