
function outerfunction(){
    let outervar=5;

    function innerfunction(){
        console.log(outervar);
    }

    return innerfunction;
}

const closureFuction=outerfunction();

closureFuction();



function clousre(){         // 
    let count=0;

    return {
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        },
        displayCount:function(){
            let message='current count'+count;

            return message;
        }
    }
}

const mycounter=clousre();
console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.displayCount());

