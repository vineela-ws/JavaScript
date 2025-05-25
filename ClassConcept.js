class car {

    constructor(name,price,model,color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    refuel(){
        console.log("Car is refuled")
    }
}

//new keyword: to create the Object
    const c1 = new car("BMW",100,"520d","Black");
    console.log(c1.name);
    console.log(c1.price);
    console.log(c1.model);
    console.log(c1.color);
    c1.refuel();

    console.log("------------------------------------------");
    const c2 = new car("Honda",20,"Civic","White");
    console.log(c2.name);
    console.log(c2.price);
    console.log(c2.model);
    console.log(c2.color);
    c2.refuel();
