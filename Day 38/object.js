var age = 34;

function printHello (){

    console.log("Hello");
}
var person = {
    name: 'Adebayo',
    age,
    printHello,
    ['hello' +(age+2)]: 'Adebayo is here',
    printAge (){
         console.log(this.age);
    }
};

/* console.log(person.printAge()); */
person.printAge();