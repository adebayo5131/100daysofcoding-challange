

var people = ['adebayo', 'james', 'andrew']

people.forEach((name) => console.log(name));

console.log('\n');

people.forEach((name) => {
    console.log('Welcome ' + name);
   
});
console.log('\n');

var add =(a,b) => a+b;

console.log(add(4,5)+ '\n');

var add = (a,c) => {

    return a +c;
}
console.log(add(3,9))

console.log('\n');

var individuals = {
    name: 'Adebayo ',
    likes: ['FIFA', 'Programming', 'Soccer'],

    generateGreeter: function(){


        return() =>{
            console.log(this.name + this.likes +'\n')
        }
           
    },

    printLikes: function(){
        this.likes.forEach((like) => {
            console.log(`${this.name} likes ${like}`)
        
    })
}
}

/* individuals.generateGreeter()(); */

individuals.printLikes()
