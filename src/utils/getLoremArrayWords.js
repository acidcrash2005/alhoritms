"use strict";
exports.__esModule = true;
var lorem_ipsum_1 = require("lorem-ipsum");
var lorem = new lorem_ipsum_1.LoremIpsum({
    wordsPerSentence: {
        max: 36,
        min: 8
    }
});
exports.getSortedLoremArrayWords = function (length) {
    var wordsArray = [];
    for (var i = 0; i < length; i++) {
        wordsArray.push(lorem.generateWords(1));
    }
    return wordsArray.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
};
