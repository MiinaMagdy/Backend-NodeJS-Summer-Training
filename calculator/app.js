const calculator = require('./src/calculator');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let menuMsg = "Welcome to calculator program 👋\n1- Add\n2- Subtract\n3- Multiply\n4- Divide\n5- Modulus\n0- Exit 🚪\nChoose the number of the operation: ";

const ask = msg => new Promise(resolve => 
    readline.question(msg, response => resolve(response))
);
  
const main = async () => {
    while (true) {
        let opt = await ask(menuMsg);
        if (opt < 1 || opt > 5) {
            readline.close();
            return false;
        }
        let n1 = Number(await ask("Enter the first number: "));
        let n2 = Number(await ask("Enter the second number: "));
        console.log('-----------------');
        console.log('Answer = ' + calculator[opt - 1](n1, n2));
        console.log('-----------------');
    }
};

main();