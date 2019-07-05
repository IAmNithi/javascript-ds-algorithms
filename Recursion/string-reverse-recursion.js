function reverse(str){
    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}