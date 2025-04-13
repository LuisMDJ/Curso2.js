const invitados = ["Ana", "Brenda", "Carlos", "Cecilia", "Daniel", "Diana"];
function encontrarPrimerPar(invitados) {
    // Puntero 1 y Puntero 2
    let i = 0;
    let j = 1;
  
    while (j < invitados.length) {
      const inicial1 = invitados[i][0].toUpperCase();
      const inicial2 = invitados[j][0].toUpperCase();
  
      if (inicial1 === inicial2) {
        // Si las iniciales coinciden, retornamos el par
        return [invitados[i], invitados[j]];
      }
  
      // Avanzamos ambos punteros
      i++;
      j++;
    }
  
    // Si no se encontró ningún par
    return null;
  }
  
  // Ejemplo de uso
  const listaInvitados = ["Ana", "Brenda", "Carlos", "Cecilia", "Daniel", "Diana"];
  const resultado = encontrarPrimerPar(listaInvitados);
  
  if (resultado) {
    console.log("Primer par que puede sentarse junto:", resultado);
  } else {
    console.log("No hay invitados con la misma inicial consecutivos.");
  }
  