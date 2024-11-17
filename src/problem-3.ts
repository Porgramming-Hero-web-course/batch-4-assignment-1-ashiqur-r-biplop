const countWordOccurrences = (str1: string, repeatWordPrm: string): number => {
    let countDuplicateWord: number = 0
    const strArray: string[] = str1.split(" ")
    for (const elm of strArray) {
        if (elm.toLocaleLowerCase() === repeatWordPrm.toLocaleLowerCase()) {
            countDuplicateWord++
        }
    }
    return countDuplicateWord
}

const input = countWordOccurrences("I love typescript ", "typescript");
console.log(input);