//Hannah Louisse B. Unite
//CMSC 100-UV3L
//Exer 2

function validatePassword(pass1, pass2) {
    if (pass1 === pass2) { //check if two strings are equal
        if (pass1.length >= 8) { //check length if valid
            var hasNum = false;
            var hasUpper = false;
            var hasLower = false;
            for (let i=0; i<pass1.length; i++) { //iterate through string to check for presence of number, uppercase, and lowercase characters
                if (isNaN(pass1[i]) == false) {
                    hasNum = true;
                }
                if ((isNaN(pass1[i])) && (pass1[i] === pass1[i].toUpperCase())) {
                    hasUpper = true;
                }
                if ((isNaN(pass1[i])) && (pass1[i] === pass1[i].toLowerCase())) {
                    hasLower = true;
                }
            }
            if (hasNum && hasUpper && hasLower) {
                return true;
            }
        }
    }
    return false;
}

function reverse(string) {
    var reversedStr = "";

    for (let i=((string.length)-1); i>=0; i--) { //access each letter in reverse, then append to reversed string
        reversedStr = reversedStr + string[i];
    }

    return reversedStr;
}

function storePassword(Name, Pass1, Pass2) {
    var newpass;

    //check if the two inputted passwords are valid, then set newpassword accordingly
    if (validatePassword(Pass1, Pass2) == true) {
        newpass = reverse(Pass1);
    } else {
        newpass = Pass1;
    }

    const myObj = {
        name: Name,
        newpassword: newpass
    }

    return myObj;
}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));