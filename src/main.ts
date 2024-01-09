import { getUser } from './services/user';

let uneVariableDeTypeString: number | string = 'hello';

uneVariableDeTypeString = 2;

const array: object = [];
console.log(typeof array); // c'est un objet

console.log(array instanceof Array); // true

console.log(array instanceof Object); // true

//2 exceptions
//exeption N°1
const _function = () => {};
console.log(typeof _function); // function

//exeption N°2
//evaluer le type de null , on va avoir un type object
console.log(typeof null === 'object'); // object

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${uneVariableDeTypeString}
  </div>
`;

///////////////////////

let a: string;
// a = 2;
let b = ['string']; // donc là c'est un tableau qui va attendre uniquement des strings

let c = () => {}; // ne retourne rien

let d = () => 'Hello'; // retourne hello
///////////////
//si je veux que la variable puisse avoir uniquement des stings ou un tableau:
let x: string[] | number[] = [];

////Infération
const user = {
  id: 1,
  name: 'linkedIn'
};
//Typage manuel
const user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Li'
};

//creation d'un type que l'on souhaite utiliser
type UserType = {
  id: number;
  name: string;
};

// const user3: UserType = {};

// const user4: UserType = {};

// class UserClass implements UserInterface {
//   constructor(private id: number, public name: string) {}
// }

/////Module A
// function printUserName(user: UserInterface) {
//   console.log(user.name);
// }

// const printUserName2: () => void = (user: UserInterface) => {
//   console.log(user.name);
// };

/////Module B
// printUserName();
// printUserName2();

const userImport = await getUser();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${userImport.name}
  </div>
`;
