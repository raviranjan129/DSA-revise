
function double(a){
    return function(b){
        return a*b;
    }
}

const double2=double(2); // it will constant for all the b go changes again nd again;

console.log(double2(3));

console.log(double2(5));


//currying made our code more reusable and flexible;