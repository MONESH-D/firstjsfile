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