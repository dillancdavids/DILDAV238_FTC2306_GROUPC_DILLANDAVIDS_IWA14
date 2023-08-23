const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (message) => {
  console.log(message);
  console.log(message);
}

const sayHello = (name) => {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`);
}

sayHello(firstName);
