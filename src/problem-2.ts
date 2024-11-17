const removeDuplicates = (argument: number[]): number[] => {
    const currentArray: number[] = argument;

    const cleanDuplicateNumber: number[] = [];
    let duplicateNumber: number = 0;
    for (const elm of currentArray) {
        if (!cleanDuplicateNumber.includes(elm)) {
            cleanDuplicateNumber.push(elm)
        } else {
            duplicateNumber = elm
        }
    }
    return cleanDuplicateNumber

}

const inputArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(inputArray);