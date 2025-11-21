const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

/* Versione 1 - Non penso sia corretta ma funziona(?), perché?
const authorNames = posts.map((author, i) => posts[i].author);
console.log("Stampo i nomi degli autori", authorNames)
*/

// Versione 2 - Okya ora è chiaro
const authorNames = posts.map(name => name.author);
console.log(authorNames);