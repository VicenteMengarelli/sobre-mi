  //funcion que suma los valores ingresados por el usuario//
  function suma(a, b) {
    return a + b;
  }

  //funcion que resta los valores ingresados por el usuario//
  function resta(a, b) {
    return a - b;
  }

  //funcion que multiplica los valores ingresados por el usuario//
  function multiplicacion(a, b) {
    return a * b;
  }

  //funcion que divide los valores ingresados por el usuario y muestra un mensaje de error en caso de que se intente dividir por 0//
  function division(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    } else {
        return a / b;
    }
  }

  //funcion que define si el valor ingresado es o no un numero o un campo vacío//
  function validarNumero(input) {
    if (isNaN(input) || input === '') {
      return false;
    }
    return true;
  }

  //prueba de resultado que limita los valores a 10 digitos de valores negativos o positivos//
  function validarResultado(resultado) {
    if (resultado < -1e10 || resultado > 1e10) {
      return 'Resultado fuera de rango';
    }
    return resultado;
  }
  
  //funcion que obtiene los valores ingresados por el usuario y el operador a utilizar//
  function calcular() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const operador = document.getElementById('operador').value;
    let resultado;
  
  //una vez que los operandos son ingresados por el usuario se valida si son numeros validos para hacer los calculos//    
  /*en caso de que alguno o ambos valores no sean validos se verá la leyenda 'operandos invalidos', 
  en cualquier otro caso procede a seleccionar el caso de cada operacion y por lo tanto va a llamar a la funcion correspondiente*/

    if (!validarNumero(operando1) || !validarNumero(operando2)) {
      resultado = 'Operandos inválidos';
    } else {
      switch (operador) {
        case '+':
          resultado = suma(operando1, operando2);
          break;
        case '-':
          resultado = resta(operando1, operando2);
          break;
        case '*':
          resultado = multiplicacion(operando1, operando2);
          break;
        case '/':
          resultado = division(operando1, operando2);
          break;
        default:
          resultado = 'Error';
      }
  
      resultado = validarResultado(resultado);
    }
  
    document.getElementById('display').value = resultado;
  }

  //funcion que se activa al oprimir el boton de limpiar, dejando los valores por defecto
  function clearFields() {
    document.getElementById('operando1').value = '';
    document.getElementById('operando2').value = '';
    document.getElementById('operador').value = '+';
    document.getElementById('display').value = '';
  }
  