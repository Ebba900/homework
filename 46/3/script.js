const animal = {
    name: "dennis",
    age: 8, 
    type: "dog",
} 

function OneYearOlder (animal){
    return animal.age++
} 
OneYearOlder(animal) 
console.log(OneYearOlder(animal)) 

// ett annat sätt man kan göra är så här: 

animal.age = 9 
console.log(animal.age)