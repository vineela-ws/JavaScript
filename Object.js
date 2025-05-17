//Vars and Functions should be defined in an Object
//key:value pair format

const circle ={
    radius:1,
    invisable:true,

    location: {
        x:1,
        y:1
    },

    draw: function(){
        console.log('draw')
    }

}

console.log(circle.radius);