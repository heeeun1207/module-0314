const pokemon = require('pokemon');
pokemon.all();
//=> ['Bulbasaur', …]
pokemon.random();
//=> 'Snorlax'
pokemon.getName(147);
//=> 'Dratini'
pokemon.getId('Dratini');
//=> 147
console.dir(pokemon);
// console.log(pokemon.random('ko'));
console.log(pokemon.getName(103,'ko'));

