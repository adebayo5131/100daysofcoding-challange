var locations =[];

locations.push({

    name: 'New York',
    temperature: 34
})

locations.push({

    name: 'New Jersey',
    temperature: 33
})

for(let location of locations){

    console.log(`its ${location.temperature}degrees in ${location.name}`);
     
}

console.log('\n')


function averageGrades(...grades){

    var total =0;

    for( let grade of grades){

        total += grade;

        

        
    }
    return (total/grades.length);
}

var total = averageGrades(1,2,3);
console.log(total);