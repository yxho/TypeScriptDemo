const numberArr : number[] = [1,2,3];

const undefinedArr : undefined[] = [undefined, undefined];

const arr : (number|string)[] = [1,'string',2];

// type alias 类型别名

type Lady = {name:string,age:number}

class Madam{
    name:string;
    age:number;
}

const ruus : {name:string,age:number}[]= [
{name:'ruu',age:18},
{name:'dajiao',age:18},
];

const ruus : Lady[]= [
    {name:'ruu',age:18},
    {name:'dajiao',age:18},
    ];

const ruus : Madam[]= [
        {name:'ruu',age:18},
        {name:'dajiao',age:18},
        ]