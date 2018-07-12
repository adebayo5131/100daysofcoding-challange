class Person {


    //constructor function
    constructor(name){
           this.name = typeof name === 'string' ? Person.capitalizeWord(name): 'Annoymous';
    }

    //method
    printGreeting(){

        console.log(`Hello i am ${this.name} !`)
    }
    //static method

    static capitalizeWord(word){

        return word[0].toUpperCase() + word.slice(1)
    }

    static allUppercase(word){

        return word.toUpperCase();
    }
}

//instance
var person1 = new Person('bayo');
person1.printGreeting();
console.log(person1.name);

console.log('\n');

var person2 = new Person();
console.log(person2.name);
person2.printGreeting();


console.log('\n')

console.log(Person.capitalizeWord('adebayo'));

console.log(Person.allUppercase('adebayo'));