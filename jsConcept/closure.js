
function outerfunction(){
    let outervar=5;

    function innerfunction(){
        console.log(outervar);
    }

    return innerfunction;
}

const closureFuction=outerfunction();

closureFuction();