function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
  
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
      }
    }
  
    return palabraMasLarga;
  }
  
  // Ejemplo de uso
  const texto = "Hola, mundo! Este es un ejemplo de texto.";
  const palabraMasLarga = encontrarPalabraMasLarga(texto);
  console.log("Palabra más larga:", palabraMasLarga);
