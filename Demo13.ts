class ruu{
    constructor(private _age:number){}
    get age(){
        return this._age-10
    }

    set age(age:number){
        this._age = age+3
    }
}

const dajiao = new ruu(28)
dajiao.age = 25
console.log(dajiao.age)


//static
class Girl{
    static say(){
        return "love"
    }
}


console.log(Girl.say())