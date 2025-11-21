const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//const bigZuc = zucchine.filter(zucchina => zucchina.length >= 15)
// const smallZuc = zucchine.filter(zucchina => zucchina.length < 15)

/*
// Versione con funzione completa
const bigZuc = []
const smallZuc = []

const sortZuc = zucchine.forEach(zucchina => {
  if (zucchina.length >= 15) {
    bigZuc.push(zucchina)
  } else smallZuc.push(zucchina) 
});

console.log(bigZuc)
console.log(smallZuc)
*/

// Versione con ternario, bellissima e compatta
const bigZuc = []
const smallZuc = []

zucchine.forEach(zucchina => (zucchina.length >= 15 ? bigZuc : smallZuc).push(zucchina));

console.log(bigZuc)
console.log(smallZuc)