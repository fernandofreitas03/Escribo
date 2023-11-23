function soma(number) {
  let conjunto = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      conjunto += i;
    }
  }

  return conjunto;
} 

const resultado = soma(10);
console.log(resultado);
