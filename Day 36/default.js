/* function sayhello(name = 'adebayo'){

    console.log('Hello ' + name + '!');
}
sayhello();
sayhello('james'); */

function greetUser (user = {name: 'Anonymous'}){

    console.log('Hello ' + user.name + '!');

}
greetUser();
greetUser({name : 'james'})

