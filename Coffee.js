//Start the coffee machine -2secs
//Grind coffee beans - 1 sec
//Boil Water -1.5 secs
//Pour Boiling water into a cup -0.5
//Add ground coffee to the cup -0.5
//Stir the coffee -0.3
//Enjoy your coffee


function startCoffeeMachine(callback){
    console.log('Strating the coffee Machine.........');
    setTimeout(function () {
        console.log('Coffee Machine is Ready')
        callback('Coffee Machine is Ready')
    },2000);
}

function grindCoffeeBeans(callback){
    console.log('Grinding coffee Beans.........');
    setTimeout(function () {
        console.log('Coffee beans are Ground')
        callback('Ground Coffee')
    },1000);
}


function boilWater(callback){
    console.log('Boiling Water.........');
    setTimeout(function () {
        console.log('Water is Boiled')
        callback('Boiled Water')
    },1500);
}

function pourBoilingWaterIntoCup(boiledWater,callback){
    console.log('Pouring Boiling Water Into a cup.........');
    setTimeout(function () {
        console.log('Boiling water is in the cup')
        callback(boiledWater + 'In cup')
    },500);
}

function addCoffeeToCup(groundCoffee,callback){
    console.log('Adding ground coffee to the cup.........');
    setTimeout(function () {
        console.log('Coffee Added to the cup')
        callback('Coffee is added to' + groundCoffee)
    },500);
}


function stirCoffee(coffeeInCup,callback){
    console.log('Stirring the coffee.........');
    setTimeout(function () {
        console.log('Coffee is stirred')
        callback('Enjoyable' + coffeeInCup)
    },300);
}


function enjoyCoffee(finalCoffee){
    console.log('Enjoying my' +finalCoffee)

}

//Callback hell
startCoffeeMachine(function (coffeeMachineStatus){
    grindCoffeeBeans(function (groundCoffee){
        boilWater(function (boiledWater){
            pourBoilingWaterIntoCup(boiledWater,function(waterInCup){
                addCoffeeToCup(groundCoffee, function(coffeeInCup){
                    stirCoffee(coffeeInCup, function(finalCoffee){
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })
    })
})