Introducción:
En el desarrollo de aplicaciones, una de las tareas más comunes es el manejo de datos. En mi caso, decidí crear una aplicación para gestionar notas personales usando Node.js. El objetivo de este proyecto es permitir que los usuarios creen, lean y eliminen notas, todo ello almacenado en un archivo JSON. Esta es una excelente oportunidad para aprender cómo interactuar con el sistema de archivos y manejar datos de manera estructurada, lo cual es un aspecto clave en el desarrollo de software.



Desarrollo:
Para resolver este problema, decidí usar Node.js, que es un entorno de ejecución muy eficiente para manejar operaciones de entrada y salida (I/O) con el sistema de archivos. El módulo fs de Node.js es esencial para leer y escribir en archivos locales. En este caso, voy a almacenar las notas en un archivo llamado notas.json.

Creación de una nota
El primer paso en mi aplicación fue permitir que los usuarios pudieran crear notas. Para esto, utilicé una función llamada agregarNota.

Leer todas las notas
Una vez que las notas están almacenadas en el archivo, me aseguré de que el programa pudiera leerlas y mostrarlas al usuario. Esto se logra con la función mostrarNotas, que lee el archivo notas.json y muestra todas las notas almacenadas en la consola.

Eliminar una nota
La eliminación de notas también es importante, ya que los usuarios pueden querer borrar notas antiguas o innecesarias. Para ello, creé la función borrarNota. 



Conclusión:
Crear este "Gestor de Notas Personales" me permitió aprender y practicar cómo manejar archivos en Node.js de una manera eficiente. El uso del módulo fs y el formato JSON me permitió estructurar y almacenar datos de manera sencilla. Además, al poder agregar, mostrar y eliminar notas, pude desarrollar una aplicación funcional y práctica. Este proyecto no solo me dio una comprensión más profunda sobre cómo interactuar con el sistema de archivos, sino que también me preparó para enfrentar proyectos más complejos en el futuro.
