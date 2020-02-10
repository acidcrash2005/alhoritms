import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    wordsPerSentence: {
        max: 36,
        min: 8,
    }
});

export const getSortedLoremArrayWords = (length: number) => {
    const wordsArray = [];
    for (let i = 0; i < length; i++){
        wordsArray.push(lorem.generateWords(1))
    }

    return wordsArray.sort((a,b) => {
        if(a > b){
            return -1
        }

        if (a > b){
            return 1
        }

        return 0
    });
};