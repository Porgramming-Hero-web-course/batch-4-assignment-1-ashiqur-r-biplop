class Car {
    constructor(public make: string, public model: string, public year: number) { }

    getCarAge() {
        const currentYear: number = new Date().getFullYear();
        const year =  currentYear - this.year ;
        return year
    }
}
const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());