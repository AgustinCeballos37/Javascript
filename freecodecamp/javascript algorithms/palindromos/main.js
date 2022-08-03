function palindrome(str) {
    var stringClean = str.toLowerCase().replace(/[\W_]/g, "") //Clean string of 
    var splitString = stringClean.split('')
    var reversedString = splitString.reverse()
    var joinArray = reversedString.join(""); //String
    if (stringClean == joinArray) {
        return true 
    } else {
        return false
    }
}

palindrome("2_A3*3#A2");