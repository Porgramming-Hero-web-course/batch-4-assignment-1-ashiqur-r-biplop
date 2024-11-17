{
    const sumArray = (arrayNum: number[]): number => {
        const sum: number = arrayNum.reduce((a: number, c: number): number => a + c, 0)
        return sum
    }

    const result = sumArray([1, 2, 3, 4, 5])
    console.log(result);
}