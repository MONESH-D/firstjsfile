stud1={
    name:"one",
    age: "18",
    school: "ABC",
    subjects: ['physics', "chemistry", "maths", "english"],
    marks: [95,87,98,87],
    printdetails: () =>
        {
            console.log(stud1.name + " " +stud1.age + " " + stud1.school + " ");
        }

}
stud2={
    name:"two",
    age: "19",
    school: "ABC",
    subjects: ['physics', "chemistry", "maths", "english"],
    marks: [98,93,95,96],
    printdetails: () =>
        {
            console.log(stud1.name + " " +stud1.age + " " + stud1.school + " ");
        }

}
stud3={
    name:"two",
    age: "19",
    school: "ABC",
    subjects: ['physics', "chemistry", "maths", "english"],
    marks: [98,93,95,96],
    printdetails: () =>
        {
            console.log(stud1.name + " " +stud1.age + " " + stud1.school + " ");
        }

}
function std(obj){
    obj.printdetails();
    sum=0;
    i=0;
    for (i; i<obj.marks.length; i++){
        sum = sum + obj.marks[i];
    }
   avg = sum/obj.marks.length;
   console.log(avg);
}
std(stud1);
std(stud2);
std(stud3);