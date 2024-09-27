const students=[
    {
    "name":"Jerwin",
        "course":"BSIT",
        "grade":90,
        "subjects":["CCIT102", "ITELEC01"]
},
{
    "name":"Peter",
    "course":"BSCS",
    "grade":90,
    "subjects":["CCIT102", "ITELEC01","ENGLISH"]
}
]



const singlestudent={
    "name":"Jenny",
    "course":"BSEMC",
    "grade":89
}
students.push(singlestudent);
// students[0].subjects.push("ENGLISH");
console.log(students);


const addbutton1 = document.getElementById('addbutton');
const studentcontainer1 = document.getElementById('studentcontainer');
//pede ka maglagay ng tags basta innerHTML gamitin
addbutton1.addEventListener('click',function(){
var output = "";
students.map(student =>{
    // output+=`<h1>${student.name}</h1>`; //backlash type
    // output+=`<h2>${student.course}</h2>`;
    // output+=`<h3>${student.grade}</h3>`;

    // default
    output+="<h1>"
    output+=student.name;
    output+="</h1>"

    output+="<h2>"
    output+=student.course;
    output+="</h2>"

    output+="<h3>"
    output+=student.grade;
    output+="</h3>"

});
console.log(output);
studentcontainer1.innerHTML=output;
});


// object
// //isa lang dapat key per object{}
// const student={
//     "name":"Jerwin",
//     "course":"BSIT",
//     "grade":90,
//     "subjects":["CCIT102", "ITELEC01"]
// }
// // console.log(student);
// // console.log(student.name); // default 
// // console.log(student["name"]); //pede tong maging dynamic var keys="name" tapos keys yung gagamitin sa name; 
// console.log(student.subjects[1]);


//function arrays - arrays
// const  numbers = [7,1,6,5,8,9,10];
// const  numbers1 = [7,1,6,5,8,9,10];
// console.log(numbers);
// const sortednumbers= numbers.sort().reverse();
// console.log(sortednumbers);
// //basta applicable pede kayo mag chain ng function
// const sortednumbers1= numbers1.reverse().sort();
// console.log(sortednumbers1);


//splice
// numbers.splice(2,0,7);
// console.log(numbers);

// Slice
// const newnumbers = numbers.slice(1,-1);
// console.log(newnumbers);


//Queue
// numbers.push(9);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// numbers.unshift(2);
// console.log(numbers);


// numbers.unshift(6);
// console.log(numbers);


// numbers.shift();
// console.log(numbers);