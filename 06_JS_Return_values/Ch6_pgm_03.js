// Using the return value as an argument

var getHelloTo;
var fullMessage;

getHelloTo = function (name1,name2) {
    return "Hello to " + name1 + "and" + name2;
};

fullMessage = getHelloTo("Kandra", "Dax");

console.log(fullMessage);                                       



/* Further Adventures
 *
 * The JavaScript replace function will
 * replace one string with another.
 * e.g. "Hello Bob".replace("Bob", "Babs");
 * returns the string "Hello Babs"
 *
 * 1) Declare a variable called template
 *    in the function body of getHelloTo.
 *    i.e. var template;
 *
 * 2) Assign it the value "Hello to {{name}}"
 *
 * 3) Replace the {{name}} placeholder
 *    with the value passed in as name. i.e.
 *    template = template.replace("{{name}}", name);
 *
 * 4) Return template from the function.
 *    i.e. return template;
 *
 * 5) Run the function.
 *    Does it still work?
 *
 */