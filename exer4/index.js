//Hannah Louisse B. Unite
//CMSC 100-UV3L
//Exer 4

import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

function generateUniqueID(firstName, lastName) {
    var id, alphaString;

    //append first letter of first name (lower case) and last name (lower case) to the empty string "id"
    id = firstName[0].toLowerCase() + lastName.toLowerCase();

    //generate an alphanumeric string and store in variable "alphaString"
    alphaString = uuidv4();

    //append first 8 characters of alphaString to id
    for (let i=0; i<8; i++) {
        id = id + alphaString[i];
    }

    return id;
}

function addAccount(array) {
    //check if all array elements are not null
    if ((array[0] != null) && (array[1] != null) && (array[2] != null) && (array[3] != null)) {
        //check if first name, last name, and email are not empty strings
        if ((array[0] != "") && (array[1] != "") && (array[2] != "")) {
            //check if email is valid
            if (validator.isEmail(array[2])) {
                //check if age is at least 18
                if (array[3] >= 18) {
                    var id;
                    //generate the unique id and store in variable "id"
                    id = generateUniqueID(array[0], array[1]);
                    //write the necessary information into the text file
                    try {
                        appendFileSync('users.txt', array[0] + ',' + array[1] + ',' + array[2] + ',' + array[3] + ',' + id);
                    } catch (err) {}
                    return true;
                }
            }
        }
    }
    return false;
}

export { generateUniqueID, addAccount };