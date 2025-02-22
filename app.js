function calcular (a, b, operacion) {
    switch (operacion) {
      case 'suma':
        return a + b;
      case 'resta':
        return a - b;
      case 'multiplicacion':
        return a * b;
      case 'division':
        return b !== 0 ? a/b : 'no se puede dividir por 0';
      default:
        return 'la operacion debe se o una +, -, *, /';
    }
}
console.log (calcular (10, 1, 'suma'));