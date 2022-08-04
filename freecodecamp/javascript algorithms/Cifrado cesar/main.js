function rot13(str) {
    var wordsForA = 'AZ'.charCodeAt(0)
    var wordsForZ = 'AZ'.charCodeAt(1)
    var stringToArray = str.split('')
    var descifred = ''

    for (var i = 0; i < stringToArray.length; i++) {
        stringToArray[i]=stringToArray[i].charCodeAt(0)
        if (stringToArray[i] >= wordsForA && wordsForZ ) {
            var tempCharCode = stringToArray[i]+13
            if (tempCharCode > wordsForZ) {
                tempCharCode = wordsForA + (tempCharCode - wordsForZ) - 1
            }
            stringToArray[i] = tempCharCode
        }
        descifred += String.fromCharCode(stringToArray[i])
    }
    return descifred
}
  
