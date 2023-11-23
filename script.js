function soma(number) {
  let somatorio = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

const resultado = soma(20);
console.log(resultado);
