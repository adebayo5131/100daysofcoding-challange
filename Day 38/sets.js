var chatRooms = new Set();

//add
chatRooms.add('FIFA');
chatRooms.add('Proclub');

console.log(chatRooms.size);

//has
console.log(`Does the set have Proclubs: ${chatRooms.has('Proclub')}`);


/* //delete
chatRooms.delete('FIFA');
console.log(chatRooms.size)
chatRooms.clear();
 */

//To array

chatRooms.add({name: 'Adebayo'});

console.log([...chatRooms]);

chatRooms.forEach(function (chatRooms){

    console.log(`Found chat room: ${chatRooms}`);
});

console.log('\n');

//Challange


var movies = new Set();
function addMovie (movieTitle){

    if(movies.has(movieTitle))
    {
          console.log(`Error! ${movieTitle} already exist!`)
    }
    else
    {
        movies.add(movieTitle);
        console.log(`Success! ${movieTitle} was added!`)
    }

    console.log()
    


}

addMovie('FIFA')
addMovie('FIFA19');
addMovie('GOW');
addMovie('FIFA19');

