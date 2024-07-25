//Atividade 01 ---------------------------------------------

// function multiplicarNumeros(a,b) {
//     return a*b;

// }

// const produto = multiplicarNumeros(10,3)

// function imprimirResultado(resultado) {
//     console.log(`O resultado da multiplicação é ${resultado}`)
//     // resultado(a,b)
// }

// imprimirResultado(produto)

// Exemplo 02 ----------------------------------------------

// function saudacao(nome) {
//     alert(`Ola ${nome}`);
// }

// function chamadaCallback(callback) {
//     let nome = prompt(`Por favor, insira seu nome`);
//     callback(nome);
// }

// chamadaCallback (saudacao);

// Exemplo 03 -----------------------------------------------

// const decimal = parseFloat("3.14");
// console.log(decimal);
// const numero = parseInt(42);
// console.log(numero);
// Math.PI = 3.141592653589793;
// console.log(pi.toFixed(2));

//Atividade 02

// const contarVogais = (str) => {
  
//     str = str.toLowerCase();
    
//     const vogais = ['a', 'e', 'i', 'o', 'u'];
  
//     let contador = 0;
  
//     for (let char of str) {
//       if (vogais.includes(char)) {
//         contador++;
//       }
//     }
  
//     return contador;
//   }

//   console.log(contarVogais("Auridenson")); 
//   console.log(contarVogais("Luciana Paiva")); 
//   console.log(contarVogais("Ta quase bom, mas pode ficar melhor")); 

// Atividade 03 -------------------------------------------------

// Converter Celsius para Fahrenheit
// function celsiusParaFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function convertertemperatura(tempCelsius, callback) {
//     return callback(tempCelsius);
// }


// let temperaturaCelsius = 30;
// let temperaturaFahrenheit = convertertemperatura(temperaturaCelsius, celsiusParaFahrenheit);

// console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);

// Atividade 04

function calculaCubo(numero) {
    return numero ** 3;
  }
  
  function callback(func, numero) {
    const resultado = func(numero);
    console.log(`O cubo de ${numero} é ${resultado}`);
  }
  
  callback(calculaCubo, 3);

  // Atividade 05

  


