
// const screenResume = (name: string, age: number, bust: number) => {
//     age < 24 && bust >= 90 && console.log(name + '进入面试')
//     age >= 24 || bust < 90 && console.log(name + '你被淘汰')
// }

// screenResume('ruu',18,89)

interface Girl {
    name: string;
    age: number;
    bust: number;
    wl?: number;
}

type Girl1 = string

const girl = {
    name: 'dajiao',
    age: 18,
    bust: 94,
    wl: 10
}

const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
    girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰')
    girl.wl && console.log(girl.name + '腰围是：' + girl.wl)
}

screenResume(girl)