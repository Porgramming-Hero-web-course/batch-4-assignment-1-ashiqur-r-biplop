{
    // interface PersonType {
    //     name: string;
    //     age: number;
    //     email: string;
    // }
    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
        let a: boolean = false
        for (const key of keys) {
            if (obj[key]) {
                a = true
            } else {
                a = false
            }
        }
        return a
    }


    // const person: PersonType = { name: "Alice", age: 25, email: "alice@example.com" };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "email"]));

}