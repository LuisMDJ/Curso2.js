// descuentos.js

// Función para aplicar descuento si hay más de 5 personas
const calcularDescuento = (numeroDePersonas, costoTotal) => {
    if (numeroDePersonas > 5) {
      return costoTotal * 0.9;  // 10% de descuento
    }
    return costoTotal;
  };
  
  // Exportamos la función para usarla en otros módulos
  export { calcularDescuento };
  