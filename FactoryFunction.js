//Factory function it produces Objects

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
}

const c1 =createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);

//Constructor Function: also used to create Objects
//Name: Pascal Notation

function circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw',radius);
    }
}

//how to call constructor function: use new keyword
const a = new circle(1);
console.log(a);
console.log(a.radius);
a.draw();


