// type annotation 类型注解
// type inference 类型推断
// 如果 TS 能够自动分子变量类型，我们就什么也不需要做了
// 如果TS 无法分析变量类型的话，我们就需要使用类型注解

let count : number;
count = 123;

let countInterference = 123

const one = 1;
const two = 2;
const three = one + two;

function getTotal(one :number,two:number){
    return one + two
}

const total = getTotal(1,2)
const Ruu = {
    name:'ruu',
    age:18
}