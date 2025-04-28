

// function abc(){
//     console.log(abc.xyz);
// }

// abc();
// abc.xyz=400;
// abc.xyz=200;
// abc();
// undefined 
//200

const number=[1,2,3,4];

number[100]=500;
console.log(number); // [1,2,3,4,<empty string > , 500]


console.log(typeof typeof 100); // first number -> string

const arr=[...'ravi'];

console.log(arr);


console.log(parseInt('10+2')) //10 -> parseInt find first non character then it return , + is not a character (digit) , hence 10;
console.log(parseInt('7FM')) //7 
console.log(parseInt('M7F')) //NaN

console.log(isNaN('Ravi'))  //it will check is it number - > true;


console.log([1,2,3].map(num=>{
    if(num>0) return ;

    return num*2;
}))   //[undefined,undefined,undefined]



// function abc(){
//     return ;
// }

// console.log(abc()); // undefined;



{
    function abc(){
        console.log("Ravi");
    }
}

abc();   //Ravi  
// if we use strict mode then we get error abc is not defined; (referenceError);


function dec(a,b){
    'use strict'
    a=100;
    b=200;
    return arguments[0] + arguments[1];
}

console.log(dec(300,400))


const arrr=[1,2,3,4,5,6,7];

const newArr=arrr.map((num)=>num>4); //find -> return first element of the condition 
                                    //filter -> return the array of elements following the conditions;
                                    //map=> goes to every elements of the array and check condition , return true , false;

console.log(newArr);


console.log('4'-3);
console.log(7-'4');