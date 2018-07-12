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

//instance
var person1 = new Person('bayo');
person1.name ='jen';
person1.printGreeting();


console.log('\n');

var person2 = new Person();
person2.printGreeting();


console.log('\n')

console.log(Person.capitalizeWord('adebayo'));

console.log(Person.allUppercase('adebayo'));

console.log('\n')


var obj = {
    set age(val){

        this._age = val + 10;

    },

    get age()
    {
        return this._age;
    }
}

obj.age= 20;
console.log(obj.age);