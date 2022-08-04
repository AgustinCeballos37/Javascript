function palindrome(str) {
    var stringClean = str.toLowerCase().replace(/[\W_]/g, "") //Clean string to alphanumeric

    var splitString = stringClean.split('') //Split string into a array
    var reversedString = splitString.reverse() //reverse string with method (a alternatived method is use a for)

    var splitString = stringClean.split('')  //Split string into a array
    var reversedString = splitString.reverse()  //reverse string with method (a alternatived method is use a for)

    var joinArray = reversedString.join(""); //join array into a string
    if (stringClean == joinArray) {
        return true                     //check condition started string with final string
    } else {
        return false
    }
}


//Sample String

palindrome("2_A3*3#A2"); //Sample String

