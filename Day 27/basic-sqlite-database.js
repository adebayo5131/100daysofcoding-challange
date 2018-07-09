var Sequelize = require('sequelize');

//instance of sequelize
var sequelize = new Sequelize(undefined,undefined,undefined,{
     
  'dialect': 'sqlite',
  'storage':'basic-sqlitedatabase.sqlite'
});

sequelize.sync().then(function(){
    console.log('Everything is syned');
})