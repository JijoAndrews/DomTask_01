function foo()
{

var firstNameValue =  document.getElementById("first").value;
var middleNameValue = document.getElementById("middle").value;
var lastNameValue =  document.getElementById("last").value;
var emailval =  document.getElementById("Cemail").value;

console.log( "Name:",`${firstNameValue}` ,`${middleNameValue}`, `${lastNameValue}` );
console.log( "Email:", `${emailval}`);

}


