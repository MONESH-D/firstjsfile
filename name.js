var firstname = 'monesh';
var secondname = 'd';
var name = firstname.concat(secondname);
var uppercasename = name.toUpperCase();

len = name.length;


function printname() {
    console.log(uppercasename);
    console.log(len);
}

printname();



day = "sunday";
input = 2;
i = 1;
switch (input) {
    case 1:
        if (day === "sunday" || day === "saturday") {
            console.log("WEEKEND");
        } else console.log("WEEKDAY");
        break;
    case 2:
        while(i<=100){
            if(i%5==0){
                console.log(i);
            }
            i = i+1;
        }
    break;
    default:
        console.log("wrong input");
    
}