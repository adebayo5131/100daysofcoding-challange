/* var x = 0;

if(true)
{
    let x = 12;
    console.log(x);
}

console.log(x) */




var y = 0;

for(let i = 0; i<3; i++){

    console.log(`for loop: i = ${i}`);

}

function adeCallback(){

    let name = 'Adebayo';
    return function(){

        console.log( `Hello ${name}`);

    }

   

}
adeCallback()();

if (true){
    let z =0;
    //will work
    console.log(z);
}

//wont work
console.log(z);
