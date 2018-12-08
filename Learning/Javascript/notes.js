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

if (year=="junior")
{
    myVar="Gallagher"

}
else if (year=="sophomore")
{
    myVar="Joseph"
}
else
{
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

//While and for is same as C. for uses semicolon deliminator

//Ok, meaty stuff. "getElementsBy____" is a common format. Can get tag name, class name, ID, etc, returns a list of element objects

//Break and continue are same. Continue returns to top of loop and runs next iteration without running anything below, break breaks out of loop immediately





