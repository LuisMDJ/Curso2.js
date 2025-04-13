function encontrarMaximo(arr, inicio = 0, fin = arr.length - 1) {
    if (inicio === fin) {
      return arr[inicio];
    }
  
    const medio = Math.floor((inicio + fin) / 2);
  
    const maxIzquierda = encontrarMaximo(arr, inicio, medio);
    const maxDerecha = encontrarMaximo(arr, medio + 1, fin);
  
    return Math.max(maxIzquierda, maxDerecha);
  }
  
  // Ejemplo de uso
  const numeros = [3, 7, 2, 9, 1, 5];
  console.log("El número máximo es:", encontrarMaximo(numeros));
  
