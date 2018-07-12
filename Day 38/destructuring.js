/* var array= ['Adebayo' , 'James', 'andrew']

var[ a, b, c] = array;

console.log(a, b, c); */


var todo = {

    description: 'Learning new ES6 features',
   
}

/* var{description: message, completed} = todo;
console.log(message);
console.log(completed); */

function getTodoStatus({completed}){
   if(typeof completed === 'boolean'){

    return[console.log(`Todo is ${completed ? '' : 'not'} completed.`)]
   } 
   else{

    return[undefined, {error: 'INVALID_TODO_ITEM'}];
     
   }
 
}

var[res, err] = getTodoStatus(todo);
if(err){
    console.log(err.error)
}
else
{
    console.log(res);
}


