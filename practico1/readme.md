


# Calculadora simple

Este proyecto trata sobre una calculadora simple ejecutada en html que permite al usuario realizar operaciones básicas de suma, resta, multiplicación y división entre dos números u operandos.
 
## Comenzando 🚀

Para poder utilizar la herramienta solo es necesario contar con un navegador web.

La calculadora cuenta con tres campos de texto, dos de ellos disponibles para que el usuario complete con los operandos que desee para efectuar el cálculo (indicados como: ___"Operando1"___ y ___"Operando2"___) y un tercero en el que se va a mostrar por pantalla el resultado final de la operación, un campo para seleccionar la operación matemática que va a relizarse(___Suma, Resta, Multiplicación o División___) y dos botones que nos van a permitir por un lado ejecutar la acción de ___Calcular___ y por el otro la de ___Limpiar___ la pantalla para restablecerla, volver a los campos por defecto de la misma y poder volver a utilizar la herramienta desde cero. 


### Pre-requisitos 📋

Navegador web</br> 
Por ej:
```
Google Chrome - Firefox
```

## Ejecutando las pruebas ⚙️


### Aclaración📌
Antes de comenzar las pruebas cabe destacar:
* Está establecido un límite de 10 caracteres como resultado para que se muestren por pantalla tanto para valores positivos como para valores negativos, los resultados que estén por fuera de estos, serán indicados en el cuadro de diálogo de *Resultado:* como ***"Resultado fuera de rango"*** 

* Los intentos de dividir cualquier valor por "0" (cero) tendrán como resultado el siguiente mensaje de error: ***"Error: División por cero"***

* En caso de que cualquiera o ambos cuadros de texto indicados para que el usuario coloque los números para realizar los cálculos se encuentren vacíos o contengan algún valor que sea distito a un número deberá aparecer el siguiente mensaje de error: ***"Operandos inválidos"***

### Pruebas✒️

#### __Suma:__
* Cálculo: 568 + 98321 </br>
Resultado esperado: 98889 </br>
Resultado conseguido: 98889 </br>

* Cálculo: 15 + 73</br>
Resultado esperado: 88</br>
Resultado conseguido: 88 </br>

* Cálculo: 19 + (-)9</br>
Resultado esperado: 10</br>
Resultado conseguido: 10</br>

* Cálculo: 2678 + 38</br>
Resultado esperado: 2716</br>
Resultado conseguido: 2716</br>

* Cálculo: 15563 + 23654</br>
Resultado esperado: 39217</br>
Resultado conseguido: 39217</br>

* Cálculo: 12.03 + 1.05 </br>
Resultado esperado: 13.08</br>
Resultado conseguido: 13.08</br>

#### __Resta:__
* Cálculo: 15563 - 23654</br> 
Resultado esperado: -8091 </br>
Resultado conseguido: -8091</br>

* Cálculo: 221 - 28.5</br>
Resultado esperado: 192.5</br>
Resultado conseguido: 192.5</br>

* Cálculo: 118 - 34</br>
Resultado esperado: 84</br>
Resultado conseguido: 84</br>

* Cálculo: 10.2 - 1.2</br>
Resultado esperado: 9</br>
Resultado conseguido: 9</br>

#### __Multiplicación:__
* Cálculo: 15 * 5</br> 
Resultado esperado: 75</br>
Resultado conseguido: 75</br>

* Cálculo: 13.66 * 8</br>
Resultado esperado: 109.28</br>
Resultado conseguido: 109.28</br>

* Cálculo: 53325412 * 86</br>
Resultado esperado: 4585985432</br>
Resultado conseguido: 4585985432</br>

* Cálculo: 53325412 * (-)86</br>
Resultado esperado: -4585985432</br>
Resultado conseguido: -4585985432</br>

* Cálculo: 53325412 * 867 </br>
Resultado esperado: "Resultado fuera de rango"</br>
Resultado conseguido: "Resultado fuera de rango"</br>

* Cálculo: 53325412 * -867 </br>
Resultado esperado: "Resultado fuera de rango"</br>
Resultado conseguido: "Resultado fuera de rango"</br>

* Cálculo: 140 * 0</br> 
Resultado esperado: 0</br>
Resultado conseguido: 0</br>

* Cálculo: 0 * 35</br> 
Resultado esperado: 0</br>
Resultado conseguido: 0</br>

#### __División:__
* Cálculo: 12 / 3</br> 
Resultado esperado: 4</br>
Resultado conseguido: 4</br>

* Cálculo: 21 / 0</br>
Resultado esperado: "Error: División por cero"</br>
Resultado conseguido: "Error: División por cero"</br>

* Cálculo: 0 / 21</br>
Resultado esperado: 0</br>
Resultado conseguido: 0</br>

* Cálculo: 7 / 3</br>
Resultado esperado: 2.3333333333333333</br>
Resultado conseguido: 2.3333333333333335</br>

* Cálculo: 1 / 3</br>
Resultado esperado: 0.3333333333333333</br>
Resultado conseguido:0.3333333333333333</br>

* Cálculo: 22568 / 45</br>
Resultado esperado: 501.5111111111111</br>
Resultado conseguido: 501.5111111111111</br>

* Cálculo: 22568 / (-)45</br>
Resultado esperado: -501.5111111111111</br>
Resultado conseguido: -501.5111111111111</br>

* Cálculo: (-)22568 / (-)45</br>
Resultado esperado: 501.5111111111111</br>
Resultado conseguido: 501.5111111111111</br>

## Autor 

* **Vicente Mengarelli** -> [GitHub](https://github.com/VicenteMengarelli)




