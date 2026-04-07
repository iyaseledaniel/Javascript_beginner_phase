"use strict";
// formatting all strings in an object

let formattedOutput = (nestedArray) => {
    // function changes all 1st charcter in string to uppercase 
    nestedArray.forEach(element => {
        for(let keys in element){
            if (isNaN(element[keys])){ // checks for keys that have string values !keys.includes("age")
                 // format string "name" as "Name"       
                 let formattedElement = element[keys].slice(0,1).toUpperCase() + 
                                element[keys].slice(1,element[keys].length);
                 element[keys] = formattedElement;
            }
        }
        let {firstName, surname, age, track, level} = element //object destructuring
        // output each profile
        console.log("My name is "+ surname +" "+ firstName +
            ", i am " + age + " years old and i'm learning " +
            track + " in Techcrush "+level + "."
        );
         console.log("\b")
    });

}; 

let studentProfile = [
    {firstName: "daniel", surname: "iyasele", age: 11, track: "backend", level: "Cohort 6"},
    {firstName: "abdul", surname: "sadiq", age: 25, track: "web3", level: "Cohort 7"}, 
    {firstName: "faith", surname: "Basil", age: 35, track: "frontend", level: "cohort 5"},
    {firstName: "Kelvin", surname: "Odinnaka", age: 32, track: "cybersecurity", level: "cohort 5"}
];

formattedOutput(studentProfile)