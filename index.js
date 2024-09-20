function media(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
}

function fibonacci(n) {
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  console.log(memo);
  return memo[n];
}

function fibonacciRecursivo(n) {
  if (n <= 2) return 1;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function esPalindromo(n) {
  n = n.toString().toLowerCase();
  reverseN = n.split("").reverse().join("");
  return n == reverseN;
}
