var answerString = '';

// We are building up a string of operations to evaluate. We'll keep track of the state of the string of operations in the variable answerString. We'll also display the string as it's being built in the following html element:

// <input type="text" id="answer" />

// There are three functions here to finish:
// addNumberOrOperationToInput builds up the answerString by adding either a number 0-9 or an operation. Note that we concatinate the value of the number and +, /, *, - operator both to the answerString and we want to display the string correctly in the text input HTML element shown above.

// clearVals sets the answerString back to ''. This function should also make the html element with an id of answer display an empty string.

// evaluateValue evaluates the equation the answer string and reassigns the answerString to the result of that operation. It also makesthe html element with an id of answer display the result of the evaluated answerString.
// hint for evaluateValue function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

// add each key and operation to the text input
function addNumberOrOperationToInput(val) {
	// increment the answerString by val
	// grab the element that has the id of answer and save it to a variable called answerField
	// increment the value property of answerField by the variable answerString
}

// clear functionality
function clearVals() {
	// reassign the variable answerString to an empty string
	// grab the element that has the id of answer and save it to a variable called answerField
	// reassign the value property of answerField to answerString
}

// evaulate functionality
function evaluateValue() {
	// declare a variable evaluatedAnswer set to the value of passing answerString into the built in eval function
	// grab the element that has the id of answer and save it to a variable called answerField
	// reassign the value property of answerField to evaluatedAnswer to evaluatedAnswer
}
