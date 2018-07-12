class Person {


    //constructor function
    constructor(name){
           this.name = typeof name === 'string' ? Person.capitalizeWord(name): 'Annoymous';
    }

    //setter
    set name(val){

           this._name = Person.capitalizeWord(val)
    }

    //getter no values
    get name ()
    {
           return this._name;

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

class Employee extends Person{

    constructor(name, job = 'Unemployed'){

        super(name);
        this.job = job

    }

    printGreeting(){

        console.log(`Hi I am ${this.name}, I am a ${this.job} !`)
    }
    
    callSuperMethod(){

        super.printGreeting();
    }



}

//instance
var person1 = new Employee('bayo', 'Developer');
person1.name ='eddie breezy';
person1.printGreeting();
person1.callSuperMethod();


console.log('\n');

var person2 = new Person();
person2.printGreeting();


console.log('\n')

console.log(Person.capitalizeWord('adebayo'));

console.log(Person.allUppercase('adebayo'));

console.log('\n')