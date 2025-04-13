function buscarRegalo(lista, regaloBuscado, index = 0) {
    if (index === lista.length) {
      return `El regalo "${regaloBuscado}" no se encuentra en la lista.`;
    }
  
    if (lista[index] === regaloBuscado) {
      return `El regalo "${regaloBuscado}" está en la posición ${index}.`;
    }
  
    return buscarRegalo(lista, regaloBuscado, index + 1);
  }
  
  // Ejemplo de uso
  const regalos = ['peluche', 'tren', 'libro', 'pelota', 'rompecabezas'];
  
  console.log(buscarRegalo(regalos, 'libro'));       // El regalo "libro" está en la posición 2.
  console.log(buscarRegalo(regalos, 'bicicleta'));   // El regalo "bicicleta" no se encuentra en la lista.
  
