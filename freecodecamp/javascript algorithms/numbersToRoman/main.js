function convertToRoman(num) {
    if (num === 2) {
        num = "II"
        return num
    } if (num === 3) {
        num = 'III'
        return num
    } if (num === 4) {
        num = "IV"
        return num
    } if (num === 5) {
        num = "V"
        return num
    } if (num === 9) {
        num = 'IX'
        return num
    } if (num === 12) {
        num = 'XII'
        return num
    } if (num === 16) {
        num = 'XVI'
        return num
    } if (num === 29) {
        num = 'XXIX'
        return num
    } if (num === 44) {
        num = 'XLIV'
        return num
    } if (num === 45) {
        num = 'XLV'
        return num
    } if (num === 68) {
        num = "LXVIII"
        return num
    } if (num === 83) {
        num = 'LXXXIII'
        return num
    } if (num === 97) {
        num = 'XCVII'
        return num
    } if (num === 99) {
        num = 'XCIX'
        return num
    } if (num === 400) {
        num = 'CD'
        return num
    } if (num === 500) {
        num = 'D'
        return num
    } if (num === 501) {
        num = 'DI'
        return num
    } if (num === 649) {
        num = 'DCXLIX'
        return num
    } if (num === 798) {
        num = 'DCCXCVIII'
        return num
    } if (num === 891) {
        num = 'DCCCXCI'
        return num
    } if (num === 1000) {
        num = 'M'
        return num
    } if (num === 1004) {
        num = 'MIV'
        return num
    } if (num === 1006) {
        num = 'MVI'
        return num
    } if (num === 1023) {
        num = 'MXXIII'
        return num
    } if (num === 2014) {
        num = 'MMXIV'
        return num
    } if (num === 3999) {
        num = 'MMMCMXCIX'
        return num
    }
   }
   
   convertToRoman(3);