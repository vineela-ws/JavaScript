//Call Back Hell vs Promise Chaining

//Start the coffee machine -2secs
//Grind coffee beans - 1 sec
//Boil Water -1.5 secs
//Pour Boiling water into a cup -0.5
//Add ground coffee to the cup -0.5
//Stir the coffee -0.3
//Enjoy your coffee

function startCoffeeMachine(){
    return new Promise((resolve)=>{
    console.log('Strating the coffee Machine.........');
    setTimeout(function () {
        console.log('Coffee Machine is Ready')
        resolve('Coffee Machine is Ready')
    },2000);
 });
}

function grindCoffeeBeans(){
    return new Promise((resolve)=>{
    console.log('Grinding coffee Beans.........');
    setTimeout(function () {
        console.log('Coffee beans are Ground')
        resolve('Ground Coffee')
    },1000);
 });
}

function boilWater(){
    return new Promise((resolve)=>{
    console.log('Boiling Water.........');
    setTimeout(function () {
        console.log('Water is Boiled')
        resolve('Boiled Water')
    },1500);
 });
}

function pourBoilingWaterIntoCup(boiledWater){
    return new Promise((resolve)=>{
    console.log('Pouring Boiling Water Into a cup.........');
    setTimeout(function () {
        console.log('Boiling water is in the cup')
        resolve(boiledWater + 'In cup')
    },500);
 });
}

function addCoffeeToCup(groundCoffee){
    return new Promise((resolve)=>{
    console.log('Adding ground coffee to the cup.........');
    setTimeout(function () {
        console.log('Coffee Added to the cup')
        resolve('Coffee is added to' + groundCoffee)
    },500);
 });
}

function stirCoffee(coffeeInCup){
    return new Promise((resolve)=>{
    console.log('Stirring the coffee.........');
    setTimeout(function () {
        console.log('Coffee is stirred')
        resolve('Enjoyable' + coffeeInCup)
    },300);
 });
}

function enjoyCoffee(finalCoffee){
    console.log('Enjoying my' +finalCoffee)

}

//Promise Chaining
startCoffeeMachine((coffeeMachineStatus) =>{
    console.log(coffeeMachineStatus);
      return grindCoffeeBeans();
})
.then((groundCoffee)=>{
    console.log(groundCoffee);
      return boilWater(groundCoffee);
})
.then((boiledWater) =>{
    console.log(boiledWater);
     return pourBoilingWaterIntoCup(boiledWater);
})
.then((waterInCup) =>{
    console.log(waterInCup);
     return addCoffeeToCup(waterInCup);
})
.then((coffeeInCup) =>{
    console.log(coffeeInCup);
     return stirCoffee(coffeeInCup);
})
.then((finalCoffee)=>{
    enjoyCoffee(finalCoffee);
})
.catch((error)=>{
    console.log('Error Occured', error);
})