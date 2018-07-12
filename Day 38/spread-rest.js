/* function add(a,b)
{

    return a +b;
}

var numbers = [5,8]

console.log(add(4,5));
console.log(add(...numbers));
 */

/*  var a = [1,2,3,4]
 var b = [5,6,7,8]

 var unified = [0,...a,...b, 9]

 console.log(unified);

 unified.push(...[10,11])
 console.log(unified); */


 /* function greetUsers(group,...names){

    names.forEach(function(name) {

        console.log(`Hello ${name}. You are part of the ${group}`);
        
    });


 }

 greetUsers('Developers','adebayo', 'James', 'amdrew') */


 function adder(...numbers)
 {

    var accu = 0;
   

    numbers.forEach(function(add){
        
        
      accu += add;
        
       console.log(accu + '\n');
    

    });

    
    
        
     
 }

 adder(1, 2, 3 , 4, 5)