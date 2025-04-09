
function cook(ing1,ing2,ing3){
    console.log(`${this.name} having the meal with ${ing1}, ${ing2} and ${ing3} `);
}

const adam={name:'Adam'};

const cookforAdam=cook.bind(adam,'rice','beans','water');

cookforAdam();  

// Bind returns a new function with this set to thisArg, and any presnt arguments , but doesnt invokde it immediately;



/**
 * call-> Runs the function immediately ,passing each argument separately
 * 
 * apply-> Runs the function immediately, passing arguments as an array;
 * 
 * Bind-> creates a new function with present this and arguments , which you can call later;
 */ 