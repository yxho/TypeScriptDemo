// class Person {
//     public name : string;
//     constructor(name:string){
//         this.name=name;
//     }
// }

class Person {

    constructor(public name: string) {
    }
}

class Teacher extends Person {
    constructor(public age: number) {
        super('xyh')
    }
}

const person = new Person('yxh')
const teacher = new Teacher(18)
console.log(person.name)

console.log(teacher.name)
console.log(teacher.age)