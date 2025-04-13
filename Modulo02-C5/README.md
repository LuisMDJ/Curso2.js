Introducción:
Este proyecto tiene como objetivo identificar la palabra más larga en un texto ingresado por el usuario. Utilizando la técnica de ventana deslizante (Sliding Window), recorremos cada palabra del texto de manera eficiente, comparando su longitud para encontrar la más extensa sin recalcular todo desde cero.



Desarrollo:
La solución consiste en los siguientes pasos:

Entrada de texto: El usuario proporciona un párrafo o una frase como cadena de texto.

Separación en palabras: Se utilizo el método .split(' ') para dividir el texto en un arreglo de palabras, tomando los espacios como delimitadores.

Aplicación de Sliding Window: Se recorre el arreglo palabra por palabra. A cada paso, comparamos la longitud de la palabra actual con la palabra más larga registrada hasta ese momento.

Actualización condicional: Si la palabra actual es más larga, se guarda como la nueva palabra más larga.

Resultado: Al finalizar el recorrido, se devuelve la palabra más larga encontrada.



Conclusión:
Este proyecto demuestra cómo una técnica tan simple como Sliding Window puede aplicarse eficazmente para resolver problemas comunes en programación. Al recorrer el texto palabra por palabra y comparar sus longitudes, se logra una solución eficiente, legible y útil para practicar lógica básica en programación con cadenas.
