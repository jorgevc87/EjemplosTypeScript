function doCalculationTS(a, b, c) {
    return (a * b) + c;
}

var result = doCalculationTS(1, 2, 3);
console.log('doCalculation(): ' + result);



//Inferring type
var myString = "This is a String"
var inferredNumber = 1

var myString = "" + inferredNumber.toString


//Complex Types
var complexType = { name: 'myName', id: 1 }

//overwritting value
complexType = { name: "ExtraProperty", id: 2 }

// Template Strings
var myVariable = "Test"
console.log("myVariable: " + myVariable)
console.log("myVariable: ${myVariable}")


//Arrays
var arrayOfNumbers = [1, 2, 3]
arrayOfNumbers = [4, 5, 6, 7, 8, 9]
console.log('arrayOfNumbers: ' + arrayOfNumbers)


//Loop on an Array
var arrayOfString = ["first", "second", "third"]

for (var i = 0; i < arrayOfString.length; i++) {
    console.log(`arrayOfStrings[${i}] = ${arrayOfString[i]}`)
}










