// /* function greet (name="Adebayo"){

//     console.log('Hello ' + name + '!');
    
//    /*  Template strings */
//     console.log(`Hello ${name}!`)

// }
// greet();
// greet('Kaka');

// console.log(`1 +  = $ (1 +6`);

// console.log(`Hey,

// This is an email!

// -Adebayo`
// );
//  */



var person = {
    name: 'Adebayo',
    age: 24
}

var defaultPerson ={
    name:'Anonymous', 
    age: 0

}

function welcomePerson (person = defaultPerson)
{
     console.log(`Hello ${person.name}! You are ${person.age}.`);


}

welcomePerson();
welcomePerson(person)