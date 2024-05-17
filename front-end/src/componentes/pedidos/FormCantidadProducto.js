import React from 'react';

function FormCantidadProducto(props) {
    const { producto, restarProductos, aumentarProductos, index, eliminarProductoPedido } = props;

    return (
        <li>
            <div className="texto-producto">
                <p className="nombre">{producto.name}</p>
                <p className="precio">$ {producto.price}</p>
                {producto.image && (
                    <img src={`http://localhost:5000/uploads/${producto.image}`} alt="imagen" />
                )}
            </div>
            <div className="acciones">
                <div className="contenedor-cantidad">
                    <i
                        className="fas fa-minus"
                        onClick={() => restarProductos(index)}
                    ></i>
                    <p>{producto.cantidad}</p>
                    <i
                        className="fas fa-plus"
                        onClick={() => aumentarProductos(index)}
                    ></i>
                </div>
                <button
                    type="button"
                    className="btn btn-rojo"
                    onClick={() => eliminarProductoPedido(producto.product)}
                >
                    <i className="fas fa-times"></i>
                    Eliminar Producto
                </button>
            </div>
        </li>
    );
}

export default FormCantidadProducto;
