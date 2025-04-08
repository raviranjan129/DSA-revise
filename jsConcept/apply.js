
function cook(ing1,ing2,ing3){
    console.log(`${this.name} is having a meal with ${ing1},${ing2} and ${ing3}`);

}

const adm={name:"Adam"};

cook.apply(adm,["rice","beans","water"]);  // call takes arguments one by one ,while apply takes arguments as a list; (takes arguments as an array)