/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'a high school diploma';

// set the value of this based on a person's education
var salary;
var output;

switch (education) {
	case "no high school diploma":
	    salary = 25636;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "a high school diploma":
	    salary = 35256;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "an Associate's degree":
    	salary = 41496;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "a Bachelor's degree":
    	salary = 59124;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "a Master's degree":
    	salary = 69732;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "a Professional degree":
    	salary = 89960;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;

	case "a Doctoral degree":
    	salary = 84396;
    	output = "In 2015, a person with "+ education + " earned an average of $" + salary.toLocaleString("en-US") + "/year."
    	break;
	
	default:
	    break;
}

console.log(output);
