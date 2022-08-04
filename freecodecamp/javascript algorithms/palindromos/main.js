function palindrome(str) {
    var stringClean = str.toLowerCase().replace(/[\W_]/g, "") //Clean string to alphanumeric
<<<<<<< HEAD
    var splitString = stringClean.split('') //Split string into a array
    var reversedString = splitString.reverse() //reverse string with method (a alternatived method is use a for)
=======
    var splitString = stringClean.split('')  //Split string into a array
    var reversedString = splitString.reverse()  //reverse string with method (a alternatived method is use a for)
>>>>>>> da63d529f3350b74d28ae558ac7bcd3289d53bcb
    var joinArray = reversedString.join(""); //join array into a string
    if (stringClean == joinArray) {
        return true                     //check condition started string with final string
    } else {
        return false
    }
}

<<<<<<< HEAD
palindrome("2_A3*3#A2"); //Sample String
=======
palindrome("2_A3*3#A2"); //Sample String
>>>>>>> da63d529f3350b74d28ae558ac7bcd3289d53bcb
