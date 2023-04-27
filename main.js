// tady je místo pro náš program

const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

// a. Pomocí funkce forEach vypište do konzole postupně věk každé osoby z pole persons.
persons.forEach(person => {
    console.log(person.age)
});

// b. Pomocí metody forEach napište cyklus, který vypíše do konzole první písmeno z každého jména v poli names.
persons.forEach(person => {
    console.log(person.name.charAt(0))
});
// names.forEach(name => console.log(name[0]))

// c. Pomocí metody find najděte v poli persons osobu se jménem "Adam" a vypište ji do konzole.
console.log(persons.find((persons) => persons.name === 'Adam'))

// d. Vypište do konzole gender osoby se jménem "Onyx".
console.log(persons.find((persons) => persons.name === 'Onyx').gender)

// e. Pomocí metody findIndex najděte v poli persons index osoby s věkem 22 a mužským pohlavím.
console.log(persons.findIndex((person) => persons.age === 22 && persons.gender === 'male'))

// f. Pomocí metody some zjistěte, jestli jsou v poli numbers nějaká čísla dělitelná 11.
console.log(numbers.some((number) => number % 11 === 0))

// g. Pomocí metody some zjistěte, jestli jsou v poli persons nějaké osoby nebinárního pohlaví, tedy nejsou ani male, ani female.
console.log(persons.some((persons) => persons.gender != 'male' && persons.gender != 'female'))

// h. Pomocí metody every zjistěte, jestli v po
console.log(persons.every((persons) => persons.age >= 18))

const mladeznici = persons.filter(person => person.age < 18);
console.table(mladeznici);

