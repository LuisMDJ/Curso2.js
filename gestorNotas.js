const fs = require('fs');

// Crear una nueva nota
function agregarNota(titulo, contenido) {
  fs.readFile('notas.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error al leer el archivo:', err);
      return;
    }

    let notas = JSON.parse(data); // Convertir el contenido del archivo a objeto

    // Crear un objeto con la nueva nota
    const nuevaNota = { titulo, contenido };
    notas.notas.push(nuevaNota); // Agregar la nueva nota al arreglo

    // Escribir las notas actualizadas en el archivo
    fs.writeFile('notas.json', JSON.stringify(notas, null, 2), (err) => {
      if (err) {
        console.log('Error al escribir en el archivo:', err);
        return;
      }
      console.log('Nota añadida correctamente');
    });
  });
}

// Listar todas las notas guardadas
function mostrarNotas() {
  fs.readFile('notas.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error al leer el archivo:', err);
      return;
    }

    const notas = JSON.parse(data); // Convertir el contenido a objeto

    if (notas.notas.length === 0) {
      console.log('No tienes ninguna nota guardada.');
    } else {
      console.log('Tus notas son:');
      notas.notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
      });
    }
  });
}

// Eliminar una nota por su título
function borrarNota(titulo) {
  fs.readFile('notas.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error al leer el archivo:', err);
      return;
    }

    let notas = JSON.parse(data); // Convertir el contenido del archivo a objeto

    // Filtrar las notas para eliminar la que tenga el título proporcionado
    const notasRestantes = notas.notas.filter(nota => nota.titulo !== titulo);

    if (notasRestantes.length === notas.notas.length) {
      console.log('No se encontró una nota con ese título');
    } else {
      notas.notas = notasRestantes; // Actualizar las notas con las filtradas

      // Escribir el archivo actualizado
      fs.writeFile('notas.json', JSON.stringify(notas, null, 2), (err) => {
        if (err) {
          console.log('Error al escribir en el archivo:', err);
          return;
        }
        console.log('Nota eliminada correctamente');
      });
    }
  });
}

// Acciones que el programa puede ejecutar
const accion = process.argv[2]; // Acción a realizar: crear, listar, eliminar
const titulo = process.argv[3]; // Título de la nota (para crear o eliminar)
const contenido = process.argv[4]; // Contenido de la nota (para crear)

switch (accion) {
  case 'crear':
    if (!titulo || !contenido) {
      console.log('Por favor, proporciona un título y contenido para la nota.');
    } else {
      agregarNota(titulo, contenido);
    }
    break;

  case 'listar':
    mostrarNotas();
    break;

  case 'eliminar':
    if (!titulo) {
      console.log('Debes especificar el título de la nota que deseas eliminar.');
    } else {
      borrarNota(titulo);
    }
    break;

  default:
    console.log('Acción no válida. Usa "crear", "listar" o "eliminar".');
}
