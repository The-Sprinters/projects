console.log("Hello Guys Welcome to Array & Loops World");

// Arrya and Loops

const languages = ['javascript', 'c', 'python'];
// console.log(languages.length);
// console.log(languages[0]);

/*
// Add someing in an arry in ending
languages.push('dart');

// Add someing in an arry in starting
languages.unshift('java');

// remove someing in an arry in ending
languages.pop();

// remove someing in an arry in ending
languages.shift();
console.log(languages);
*/

// Loops

// 1. forLoop

// for (let i = 0; i < 4; i++) {
//     console.log("Hello Guys");
// }

const actors = [
    {
        name: 'Actor 1',
        payment: 100
    },
    {
        name: 'Actor 2',
        payment: 200
    },
    {
        name: 'Actor 3',
        payment: 150
    }
];

/*
// 1. forLoop
for(i = 0; i < actors.length; i++){
    actors[i].payment = actors[i].payment - 10;
}
console.log(actors);
*/

/*
// 2. forEachLoop
actors.forEach((actor)=>{
    actor.payment = actor.payment - 10;
})
console.log(actors);
*/


/*
// 3. forOfLoop
for (let actor of actors) {
    actor.payment = actor.payment - 10;
}
console.log(actors);
*/


// ***---Filter---***
const students = [
    {
        name: "Student 1",
        marks: 45
    },
    {
        name: "Student 2",
        marks: 60
    },
    {
        name: "Student 3",
        marks: 35
    },
];

// const filed = students.filter((student) => {
//     if(student.marks < 45){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(filed);


// const filed = students.filter((student) => student.marks < 45)
// console.log(filed);


