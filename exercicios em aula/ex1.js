let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somaMap(...array) {
  let retorno = 0;
  let resultado = array.map((n) => (retorno += n));
  console.log(retorno);
  return retorno;
}

somaMap(...array);

function somaReduce(...array) {
  let resultado = array.reduce((acumulador, atual) => {
    return (acumulador += atual);
  });
  return console.log(resultado);
}

somaReduce(...array);
