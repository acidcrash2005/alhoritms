"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var readline_1 = require("readline");
var getLoremArrayWords_1 = require("./utils/getLoremArrayWords");
var words = getLoremArrayWords_1.getSortedLoremArrayWords(100);
console.log(words);
var rl = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Number from 1...100: ', (function (number) {
    var list = __spread(new Array(100).keys());
    var num = Number(number);
    var low = 0;
    var high = list.length - 1;
    var count = 0;
    var guessCheck = null;
    while (count < list.length && guessCheck !== num) {
        var mid = Math.floor((low + high) / 2);
        var guess = list[mid];
        count++;
        if (num > list.length - 1) {
            console.log("No number exist in array from 1...100");
            break;
        }
        if (guess === num) {
            console.log("The index of " + number + " is " + list.indexOf(guess) + " guess by " + count + " iterations!");
            break;
        }
        if (guess > num) {
            high = guess - 1;
        }
        if (guess < num) {
            low = guess + 1;
        }
        guessCheck = guess;
    }
    rl.close();
}));
