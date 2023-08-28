function add(num1 : number , num2: number,num3 :number = 10 ) : number{
    return num1+num2+num3
}
console.log(add(12,21));

const sub = (num1 : number , num2: number) : number =>{
    return num1-num2;
}
const mult = function (num1 : number , num2 : number):number {
        return num1*num2;
}

function add1(num1 : number , num2: number, ...num3 : number[]){
    return num1 + num2 + num3.reduce((acc,val)=> acc+val)
}
console.log(add1(1,2,3,4,56,2));

function getItems<Type>(items : Type[]):Type[]{
    return new Array<Type>().concat(items)
}
console.log(getItems(["a","a","b","c","d"]));
console.log(getItems([1,2,3,4,5]));


