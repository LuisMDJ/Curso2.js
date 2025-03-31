// viajes.js

// Array para guardar los destinos (usamos const ya que no vamos a re-asignar la variable)
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
  // Crear un objeto con los datos del destino
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    costo: calcularCosto(destino, transporte)
  };
  destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
  let costoBase = 0;

  // Costo base por destino
  if (destino === "Paris") {
    costoBase = 500;
  } else if (destino === "Londres") {
    costoBase = 400;
  } else if (destino === "New York") {
    costoBase = 600;
  }

  // Costo adicional por tipo de transporte
  if (transporte === "Avión") {
    costoBase += 200;
  } else if (transporte === "Tren") {
    costoBase += 100;
  }

  return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
  // Recorrer el arreglo de destinos y mostrar la información de cada uno
  destinos.forEach(viaje => {
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Costo: $${viaje.costo}`);
    console.log("---------------------------");
  });
};

// Exportamos las funciones para usarlas en otros módulos
export { registrarDestino, mostrarItinerario };
