interface Girl {
    name: string;
    age: number;
    bust: number;
    wl?: number;
    [propname:string]:any;
    say():string;
    
}

interface Teacher extends Girl{
    teach():string;
}

class ruu implements Girl{
    name="ruu";
    age = 18;
    bust=90;
    say(){
        return "welcome"
    }
}

const girl = {
    name: 'dajiao',
    age: 18,
    bust: 94,
    wl: 10,
    sex:'女',
    say(){
        return "welcome"
    }
}

const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
    girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰')
    girl.wl && console.log(girl.name + '腰围是：' + girl.wl)
    girl.sex && console.log(girl.name + '性别是：'+girl.sex)
}

screenResume(girl)