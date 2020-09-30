class Person{
    public readonly _name:string
    constructor(name:string){
        this._name = name
    }
}

const person = new Person('yxh')

console.log(person._name)

abstract class girl{
    abstract skill()
}

class Waiter extends girl{
skill(){
    console.log('welcome')
}
}

class teach extends girl{
skill(){
    console.log('anmo')
}
}