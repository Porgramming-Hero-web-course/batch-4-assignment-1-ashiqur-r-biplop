interface Profile {
    name: string;
    age: number;
    email: string;
}
type UpdateGeneric<obj> = { [key in keyof obj]?: obj[key] | undefined }

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

const updateProfile = (obj: Profile, updatedProperTies: UpdateGeneric<Profile>): Profile => {
    return { ...obj, ...updatedProperTies }
}

console.log(updateProfile(myProfile, { age: 26 }));