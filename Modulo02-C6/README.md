Introducción:
El siguiente código tiene como objetivo resolver un problema común mediante recursión: buscar un regalo específico dentro de una lista. Esta técnica permite resolver problemas que pueden dividirse en subproblemas más simples, y es especialmente útil cuando no se permite o no se desea usar bucles como for o while.
La recursión consiste en que una función se llama a sí misma hasta cumplir con una condición base que detiene el proceso. En este caso, se trata de recorrer un arreglo (lista) en busca de un elemento (regaloBuscado).



Desarrollo:
La función creada se encarga de buscar un regalo específico dentro de una lista utilizando recursión. Se define un índice que empieza en cero y representa la posición actual del arreglo. La función evalúa dos casos principales:

Si llega al final de la lista sin encontrar el regalo, devuelve un mensaje indicando que no está.

Si encuentra el regalo en la posición actual, devuelve un mensaje con la posición en la que se encuentra.

Si ninguno de los dos casos se cumple, la función se llama a sí misma, avanzando al siguiente elemento de la lista. Este proceso se repite hasta encontrar el regalo o llegar al final de la lista.



Conclusión:
Este código demuestra cómo una función recursiva puede utilizarse eficazmente para buscar un elemento dentro de un arreglo sin necesidad de bucles. La recursión permite simplificar la lógica en algunos casos y es una habilidad esencial en la programación. Al definir correctamente los casos base y realizar llamadas recursivas adecuadas, se logra un flujo lógico que simula la exploración paso a paso dentro del arreglo.
