//Case sensitive language
/*
 * Comments work same as C/C++/Java
 */

//Basic building block is the statement, seperate with semicolons;
//Newline is good practice, but not necissary
//Again, same as C/Java

//White space is irrelevant. Yay, not-python-ness!

//Runs top to bottom

alert("alert 1");

//What you're defining needs to be declared
//Variables! defined with type var, can't start with number but can contain them
//Camel case is standard
//Weakly typed, variable type is not defined at initialization -- Darn its getting pythonish
//Can overwrite, for example, string to int, simply by writing an int to the previous string value
//Var keyword is used for everything
//Means int won't stay int, ie 21/2 = 10.5

var myVar;

//Math and operators work the way you'd expect

//Adding int and string creates a concatenated string
//Strings concatenate with +

//Will return NaN for null/nonsense operations

//Shorthand forms of myVar += 5, -=5, for relative add/subtract

//Most basic operation is, write to document, or console. To console=println, roughly

myVar="josepher";

//Document.write(myVar) writes to visible document, overrides existint html

//More common is, console.log(myVar), writes to chrome dev console

//Booleans, just pass true or false

//Conditionals work as you expect, > , < , == , 

//Boolean() operator returns true on non-zero numbers, non-empty strings, etc.

//If, else, else if work as you'd expect them to

var year = "junior";

if (year=="junior") {
    myVar="Gallagher"

}
else if (year=="sophomore") {
    myVar="Joseph"
}
else {
    myVar="Joe"
}

console.log(myVar);

/*
 *Triple equal checks both type and value
 *Double equal will return true on 5 == "5"
 *Same with !==, not equal type or value
 *All other operators are as expected
 */

//&&, ||, etc. are also as expected, as is ++, --
//

//While and for is same as C. for uses semicolon deliminator. No need to declare incrementor

//Ok, meaty stuff. "getElementsBy____" is a common format. Can get tag name, class name, ID, etc, returns a list of element objects

//Break and continue are same. Continue returns to top of loop and runs next iteration without running anything below, break breaks out of loop immediately

//Index from zero

//Lists can be indexed like arrays. list.length returns length

var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++) {
    //Concatenate number to link to give name
    //Class name modifies HTML to give them a class
    //Can use javascript to edit base HTML
    links[i].className = "link-" + i;
}

//Functions, called functions, not methods
//Declared with "function" keyword
//Declaration syntax works as you'd expect

//Custom functions can be called individually directly from console

//Return is same as C

function getAverage(a,b) {
    var average = (a + b)/2;
    console.log(average);
    return average;
}

//Functions with bad argument format will return NaN
//Extra arguments can be passed, will be ignored
//Things like exceptions seem weak
//No compilation or syntax validation

//Variables at global level are defined on 0 level indent
//Variables declared inside function are local
//Unlike java, block-level variables are not limited to block scope. Variables in function are function-scope, no matter where declared.
//As usual, don't actually use global variables

//Math object is used for advanced math functions, kinda like numpy

console.log(Math.PI);

//New thing! "with" changes scope down to argument within brackets. Would be amazing for getting rid of "consoleGUIModel.getConsoleGUIview.etc" chains!
with(Math)
{
    console.log(floor(PI * 2));
}

//"floor" and "ceiling" round down and up, useful for hard-writing int datatype

//isNaN() is a built-in function to evaluate the NaN-ness of things. Javascript tries its best to calvinball-score, but can only do so much (ie, multiplying 7* "7" works, 7*"7q" doesn't)

//Strings work like C, can be '' or ""
//Quotes can be overridden by using escape sequences, ie \'

var myString = 'I\m a "correctly formatted" string';

//String has a bunch of manipulation methods
//When var type has been explicitly defined, brackets is good about context suggestions

//Strings can be directly compared using == or === operator

//Substrings done via myString.slice(), goes begin/end or begin-to end

//split(",") outputs an array of the string, split at each instance of deliminator
//Arrays seem like a bigger deal in javascript, more like c than java

//Ternary operators are a thing. Shorthand version of conditional
//(condition<somevalue) ? "Return if true": Return if  false

//Arrays work the good old fashoned[] way, written and read like gml
//Arrays can have mixed datatypes. Potential for complex state arrays like rbe2001. Oh god, don't do anything like RBE2001's code. That's gonna be fun to clean for release...

var myArray = Array(5) // initializes array
//Or, var myArray = [] for empty, indefinite array

//Bunch of array methods, pop, push, sort, etc
//Mixed sort goes by type, then a subsort

//Oh btw, its all oject oriented!
"string".split(2);
//That's valid, performing a dot function call direct on a primative. Cool!

//Instantiating an object, stored to variables
//Java: Car car = new Car()
//Javascript: var myCar = new Car()
//Dot notation is always used
//method is a function associated with a certain object
//Local variables of an object are accessed directly, not through getters/setters

//Functions are values which can be stored, just like numbers
//var foo = function foo(){}

//Always declare all variables at top of function, since that's where scope is

//Always, always K&R in javascript, not Allman, because of implicit semicolon errors

var num = 8;
num.toString();

//Object time. Also known as, Dillo time!
var dillo = new Object();

//BIG DIFFERENCE: Variables are dynamically added to the object via dot notation
dillo.length = 7;
dillo.dead = false;

//Functions are defined the same way, by creating function()

dillo.hitWithTruck = function(){
    this.dead = true;
    this.length += 1;
    console.log(this);
}

//Can also be defined via a shorthand -- this is preferred. Fields, INCLUDING FUNCTIONS, are comma seperated. 
//YOU ARE GONNA FORGET THE COMMA ALL THE TIME
//DON'T FORGET THE COMMAS
//Parameters can be added during function creation
var dillo2 = {

    length: 8, 
    dead: false, 
    hitWithTruck: function(){
        this.dead = true;
        this.length += 1;
        console.log(this);
    },

    feedFood: function(amount) {
        this.length += amount;
    }
};

//Constructors are a better way for instanstiable classes

var dilloClass = function(length, dead){
    this.length = length;
    this.dead = dead;
    this.hitWithTruck = function(){
        this.dead = true;
        this.length += 1;
        console.log(this);
    };  //Note semicolon, you're assigning a variable to be equal to a function
    //YOU CAN ASSIGN A VARIABLE EQUAL TO A FUNCTION!! SWEET RACKET!
    this.feedFood = function(amount) {
        this.length += amount;
    };
}

//Date, random useful object -- constructor returns current date
var date = new Date();

//Or, with a past date. Months index from zero, which sucks
var birthday = new Date(1991, 9, 4);

//Various methods
console.log(date.getHours());

//Dates need to be compared with .getTime()
//Complex Object instances are not equal, even if all fields are same


//THE DOM

//Used to add, remove, or change HTML
//Represents HTML as a xml-type format
//Every element/tag is an object
//Methods and properties will be called on those tags
//Typical HTML form means it takes on a tree form, with elements being nodes
//Element is one node, internal text is a node, attributes are nodes

//DOM tree starts with "document." Then further traversed with dot notation. document.body. ...
//Also have methods to generate arrays of bunches of elements, for example all classes with certain class

//document.getElementsBy... is standard form for all elements
var allPs = document.getElementsByTagName("p");
var allContent = document.getElementsByClassName("content");

//Can then use array notation to get specific element in, say, a list of divs

//Id is unique, therefore element rather than elements
//document.getElementById("").;

//Use .innerHTML to overwrite all internal HTML
//Or, .textContent to overwrite the text only

//GetAttribute() takes argument of attribute name, returns value
//SetAttribute takes argument of 

//className variable can be changed
//Easiest way to change style is by writing inline style
//element.setAttrubute("style", "Write CSS here")
//Calling multiple times will overwrite, instead, can do semicolon delimination. 

//Better is element.style.*CSS property*
//Camel Case for javascript, hyphen for CSS

//document.getElementById("").style.backgroundColor = "blue";

//Elements can also be added or removed entirely from the DOM
//Write to variable document.createElement("li")

//Create first, then specify position with appendChild

var newA = document.createElement("a")
newA.innerHTML = "Item 6"
var menu = document.getElementById("links");

menu.appendChild(newA);

//Also have insertBefore()

//Removal is done from the parent tag
//parent.removeChild(child), where child is a specific tag. Returns the element, can be stored in a variable, for reinsertion purposes if necissary

//Event triggering, thing like onclick, etc. 
//Can be tied to pretty much any user input or action like hovers

//Set an onclick attribute to a tag, like a button
//Done by "anonymous function"
//tag.onclick = function(){
//
//    Code
//};

//Also can be done by event listeners

//Switching between CSS cases can be done with #content, #content.open, and changing the class assignment in the javascript

//Window onLoad event is triggered when page finishes loading. Allows scripts to be put in the header. 
//Can close entire script in window.onload = function(){};

//Better practice to use helper functions, like function setUpEvents(){},

//then call setUpEvents() in window.onload;

//Note: this is the CC design pattern, and Adobe pattern. Use this!

//Two ways to do timing in Javascript, setTimeout, setInterval
//setTimeout(function name, ms) calls after ms passes, once
//setInterval calls repeatedly
//Write setInterval to a variable and call clearInterval(var) to stop it

//myForm = Document.forms.idOfForm gives shortcut to access form elements
//myForm.name.value, returns name field