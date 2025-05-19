const circle = {
    radius: 1,
    color: 'red',
    log(){
      console.log('log',this.radius)
    }
}

console.log(circle);

//Add more properties in circle object
circle.price = 100;
circle.isPresent = true;
circle.draw  = function(){

}

console.log(circle);

//Delete Properties from Object
delete circle.price;
console.log(circle);

delete circle.draw;
console.log(circle);

circle.log();
