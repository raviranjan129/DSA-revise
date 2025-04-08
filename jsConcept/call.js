
function cook(ing1,ing2,ing3){
    console.log(`${this.name} is having a meal with ${ing1}, ${ing2} and ${ing3}`);
}

const adam={name:"Adam"};

cook.call(adam,'rice','beans','water'); // call takes parameter one by one; (ex-> resturent to order food)


// call invokes the function immediately , with this set to thisArg, and accepts arguments one by one'