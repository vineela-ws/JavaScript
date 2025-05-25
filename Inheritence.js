
class Automobile{
    constructor(chasisNumber){
    this.chasisNumber = chasisNumber;
  }
  useAeroDynamic(){
    console.log("Automobile ----Aerodynamic")
  }
}

//Parent (Super Class)

class Vehicle extends Automobile {
    constructor(make,model,year){
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.make},${this.model},${this.year}`
    }

    startEngine(){
        console.log('Start Engine---')
    }

    stopEngine(){
        console.log('Stopping Engine---')
    }

       driverCar(){
        console.log(`Driving the Car` +this.model)
    }
}

//Child Subclass
class Car extends Vehicle{
     constructor(make,model,year,fuelType){
       super(make,model,year);  //Call the Parent class constructor
       this.fuelType = fuelType;
    }

    driverCar(){
        console.log(`Driving the Truck` + this.model + "Capacity" + this.fuelType);
    }
}

class Truck extends Vehicle{
     constructor(make,model,year,loadingCapacity){
       super(make,model,year);  //Call the Parent class constructor
       this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log(`Driving the Truck` + this.model + "Capacity" + this.loadingCapacity);
    }
}

//Creating the Objects (instances): newKeyword
const car = new Car("Honda","Civic",2023,"Petrol");
const truck = new Truck ("Tata","Sumo",2020,100);

car.startEngine();
console.log(car.getInfo());
car.driverCar();
car.useAeroDynamic();

truck.startEngine();
console.log(truck.getInfo());
truck.driverTruck();


