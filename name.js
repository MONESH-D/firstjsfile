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
dayno = 1;
switch (dayno) {
    case 1:
        if (day === "sunday" || day === "saturday") {
            console.log("WEEKEND");
        } else console.log("WEEKDAY");
        break;
}