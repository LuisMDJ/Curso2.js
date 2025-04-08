// Lista de compras
const listaDeCompras = new Set();

// Función para agregar un producto a la lista
const agregarProducto = (producto) => {
    if (!listaDeCompras.has(producto)) {
        listaDeCompras.add(producto);
        console.log(`Producto "${producto}" agregado a la lista.`);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

// Función para eliminar un producto de la lista
const eliminarProducto = (producto) => {
    if (listaDeCompras.has(producto)) {
        listaDeCompras.delete(producto);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.log(`El producto "${producto}" no está en la lista.`);
    }
};

// Función para mostrar la lista de compras
const mostrarLista = () => {
    if (listaDeCompras.size === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach(producto => console.log(`- ${producto}`));
    }
};

// Ejemplo de uso
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche"); // Producto duplicado
mostrarLista();
eliminarProducto("Leche");
mostrarLista();
