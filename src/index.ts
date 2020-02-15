import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Number from 1...100: ', (number => {
    const list = [...new Array(100).keys()];
    const num = Number(number);

    let low = 0;
    let high = list.length - 1;
    let count = 0;
    let guessCheck: null | number = null;

    while (count < list.length && guessCheck !== num ) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        count++;

        if (num > list.length - 1) {
            console.log(`No number exist in array from 1...100`);
            break;
        }

        if (guess === num) {
            console.log(`The index of ${number} is ${list.indexOf(guess)} guess by ${count} iterations!`);
            break
        }

        if (guess > num ) {
            high = guess - 1;
        }

        if (guess < num ) {
            low = guess + 1;
        }

        guessCheck = guess;
    }

    rl.close();
}));