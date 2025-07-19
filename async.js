async function* generarNumeros(inicio, fin) {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  for (const numero of generarNumeros(1, 5)) {
    console.log(numero);
  }
})();