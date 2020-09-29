class Person{
    protected name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')
    }
}

class Teach extends Person{
    public sayBye(){
        this.name
    }
}

const person = new Person();
person.name = 'yxh';
person.sayHello();