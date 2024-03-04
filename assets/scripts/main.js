// Declare and define three variables using a numerical value
const first_variable = 0;
const second_variable = 0;
const third_variable = 0;
// * If the three variables are equal, display "The three variables are the same" in the console
if(first_variable === second_variable && first_variable === third_variable) {
    console.log("The three variables are the same");
}
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
else if(
    (first_variable === second_variable && first_variable !== third_variable) ||
    (first_variable !== second_variable && first_variable === third_variable)
) {
    console.log("Two of the variables are the same")
}
// * If the variables are all different display "all variables are different" in the console
else {
    console.log("all variables are different");
}