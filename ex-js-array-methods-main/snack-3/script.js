const numbers = [2, 8, 4, 7, 2, 87];
// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numbersPlus1 = numbers.map((number) => number + 1)
console.log("Stampo il nuovo array, numeri + 1", numbersPlus1);