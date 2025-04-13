Introducción:
En programación, encontrar el número máximo en un arreglo puede parecer una tarea sencilla con un bucle. Sin embargo, este ejercicio tiene como objetivo aplicar el enfoque Divide and Conquer, que nos permite resolver problemas grandes dividiéndolos en partes más pequeñas, resolviendo cada parte y luego combinando los resultados.



Desarrollo:
La función que se implemento sigue los tres pasos típicos de "Divide and Conquer":

División: Se parte el arreglo en dos mitades usando un índice medio.

Conquista: Se llama recursivamente a la función sobre cada mitad para encontrar el máximo en esas partes.

Combinación: Una vez que se tienen los máximos de ambas mitades, se comparan y se devuelve el mayor de los dos.

El caso base de la recursión ocurre cuando el arreglo ya no puede dividirse más, es decir, cuando solo queda un elemento. En ese caso, simplemente se retorna ese valor.

Este proceso se repite hasta que toda la estructura del arreglo ha sido evaluada, pero sin necesidad de recorrerlo directamente con un bucle.



Conclusión:
Este ejercicio demuestra cómo aplicar el enfoque Divide and Conquer a un problema cotidiano como encontrar el número máximo en un arreglo. Aunque usar recursión puede parecer más complejo que un simple bucle, es una herramienta poderosa que prepara para resolver problemas más avanzados como ordenamiento, búsqueda binaria o estructuras de datos más complejas.
