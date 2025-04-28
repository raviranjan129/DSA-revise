console.log('A'-1); //NaN

console.log('tilak'+'100'); //tilak100 

console.log('2'+2 +'2'); //222
console.log('2'+2 - '2'); //20

const a={}
const b={name:'tilak'}
const c={name:'ravi'}
const d={name:'krrish'}
a[b]={name:'ankit'}; // ankit

a[c]={name:'ram'} // it will overwrite a

a[d]={name:'krishna'}

console.log(a[b]) //krishna

const y=0;
const z=false;

console.log(y==z);
console.log(y===z);

console.log(parseInt('M7M')); //NaN

console.log(NaN==NaN);
console.log(NaN===NaN);

const arr=[1,2,4,5];

arr.map((num)=>{
  console.log( num*2)
})

const array=[2,3,4,5];

array.shift(2);
console.log(array);

array.unshift(30);
console.log(array);

function currying(a){
  return function(b){
    return function (c){
        return a+b+c
    }
  }
}

console.log(currying(1)(2)(3));


// const arr2=['clr1','clr2','clr3']

// const [a,b]=arr2;

// console.log(a);
// console.log(b);

const func=(function (a){
    delete a; // it will not delete the a bcz of it is local value not obj;
    return a;

})(5);
console.log(func);


const user={
    name:'ravi',
    age:21,
    
}

for(key in user){
    console.log(user[key])
}

// const obj={
//     a:'one',
//     b:'two',
//     a:'three'
// }

// console.log(obj); // { a:'three' b:'two'}

let nums={
    a:100,
    b:200,
    title:"My Nums"
};

multiplyByTwo(nums)

function multiplyByTwo(){
    for(let key in nums){
        if(typeof nums[key] ==='number'){
            nums[key]=nums[key] *2;
        }
    }
}

console.log(nums)