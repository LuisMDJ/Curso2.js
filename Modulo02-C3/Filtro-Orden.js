<<<<<<< HEAD
// Lista de productos con nombre, precio y categoría
const productos = [
    { nombre: "Teclado", precio: 50, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 30, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 150, categoria: "Electrónica" },
    { nombre: "Auriculares", precio: 80, categoria: "Accesorios" },
    { nombre: "Silla Gamer", precio: 200, categoria: "Muebles" },
    { nombre: "Cargador USB", precio: 25, categoria: "Accesorios" }
];

// Filtrar productos con precio menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

// Ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Obtener solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

// Mostrar resultados en consola
console.log("Productos filtrados (menos de $100):", productosBaratos);
console.log("Productos ordenados alfabéticamente:", productosOrdenados);
console.log("Nombres de productos ordenados:", nombresProductos);

// Métodos adicionales
// Calcular el costo total de los productos filtrados
const costoTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Costo total de los productos baratos:", costoTotal);

// Verificar si hay al menos un producto en la categoría "Accesorios"
const hayAccesorios = productos.some(producto => producto.categoria === "Accesorios");
console.log("¿Hay productos en la categoría 'Accesorios'?:", hayAccesorios);

// Comprobar si todos los productos tienen un precio menor a $300
const todosMenosDe300 = productos.every(producto => producto.precio < 300);
console.log("¿Todos los productos cuestan menos de $300?:", todosMenosDe300);

// Verificar si "Mouse" está en la lista de nombres
const incluyeMouse = nombresProductos.includes("Mouse");
console.log("¿La lista incluye 'Mouse'?:", incluyeMouse);
=======
// Lista de productos con nombre, precio y categoría
const productos = [
    { nombre: "Teclado", precio: 50, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 30, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 150, categoria: "Electrónica" },
    { nombre: "Auriculares", precio: 80, categoria: "Accesorios" },
    { nombre: "Silla Gamer", precio: 200, categoria: "Muebles" },
    { nombre: "Cargador USB", precio: 25, categoria: "Accesorios" }
];

// Filtrar productos con precio menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

// Ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Obtener solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

// Mostrar resultados en consola
console.log("Productos filtrados (menos de $100):", productosBaratos);
console.log("Productos ordenados alfabéticamente:", productosOrdenados);
console.log("Nombres de productos ordenados:", nombresProductos);

// Métodos adicionales
// Calcular el costo total de los productos filtrados
const costoTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Costo total de los productos baratos:", costoTotal);

// Verificar si hay al menos un producto en la categoría "Accesorios"
const hayAccesorios = productos.some(producto => producto.categoria === "Accesorios");
console.log("¿Hay productos en la categoría 'Accesorios'?:", hayAccesorios);

// Comprobar si todos los productos tienen un precio menor a $300
const todosMenosDe300 = productos.every(producto => producto.precio < 300);
console.log("¿Todos los productos cuestan menos de $300?:", todosMenosDe300);

// Verificar si "Mouse" está en la lista de nombres
const incluyeMouse = nombresProductos.includes("Mouse");
console.log("¿La lista incluye 'Mouse'?:", incluyeMouse);
>>>>>>> c4b3971b439b2dd3c7734754a56a08382e406282
