class Car{
    minSpeed = 100;
    constructor(make,model) {
        this.make = make;
        this.model = model; 
    }
   
    startEngine(){
        console.log('Starting Engine...for car');
    }

}

class Audi extends Car{
    minSpeed = 200;
    startEngine(){
        console.log('Starting Engine...for Audi');
    }

    autoParking(){
        console.log('Audi---Autoparking');
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();