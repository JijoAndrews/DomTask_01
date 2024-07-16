function foo()
{

var firstNameValue =  document.getElementById("first").value;
var middleNameValue = document.getElementById("middle").value;
var lastNameValue =  document.getElementById("last").value;
var emailval =  document.getElementById("Cemail").value;

console.log( "Name:",`${firstNameValue}` ,`${middleNameValue}`, `${lastNameValue}` );
console.log( "Email:", `${emailval}`);

}



function creatediv(tagname,attriname,attrivalue)
{
  var divclass = document.createElement(tagname);
  divclass.setAttribute(attriname,attrivalue);
  return divclass; 
}

function createbtag(tagname,content)
{
    var bold=document.createElement(tagname);
    bold.innerHTML=content;
    return bold;
}


function createbreaktag(tagname)
{
    var brk=document.createElement(tagname);
    return brk;
}



function createnamelable(tagname,tagtype,typevalue,tagsize,sizevalue,tagid,tagidval)
{
    var nametag=document.createElement(tagname);
    nametag.setAttribute(tagtype,typevalue);
    nametag.setAttribute(tagsize,sizevalue);
    nametag.setAttribute(tagid,tagidval);
    return nametag;
}

function buttonlabel(tagname,tagtype,typevalue,clickfun,funval,tagstyle,stylevalue,content)
{
    var nametag=document.createElement(tagname);
    nametag.setAttribute(tagtype,typevalue);
    nametag.setAttribute(clickfun,funval);
    nametag.setAttribute(tagstyle,stylevalue);
    nametag.innerHTML=content
    return nametag;
}



var mydivclass = creatediv("div","class","details");
var frstnamebold=createbtag("b","First Name");
var middlenamebold=createbtag("b","Middle Name");
var lastnamebold=createbtag("b","Last Name");

var emailnamebold=createbtag("b","Email");
var passwordnamebold=createbtag("b","Password");

var breaktag=createbreaktag("br");

var firstname=createnamelable("input","type","text","size","10px","id","first");
var middlename=createnamelable("input","type","text","size","10px","id","middle");
var lastname=createnamelable("input","type","text","size","10px","id","last");

var email=createnamelable("input","type","email","size","15px","id","Cemail");
var password=createnamelable("input","type","password","size","15px","id","cpass");
var inputbtn = buttonlabel("button","type","button","onclick","foo()","style","margin:1%","Submit");

mydivclass.append(frstnamebold,firstname,breaktag,middlenamebold,middlename,breaktag,lastnamebold,lastname,breaktag,emailnamebold,email,passwordnamebold,password,inputbtn);

document.body.append(mydivclass);
