function palindrome(str) {
    //console.log(str.split(''));
    var str = str.split(' ').join('').replace(/[^a-z0-9]/gi,'').toLocaleLowerCase();
    //console.log(str);
    if(str.split('').reverse().join('')===str)
    {

        return true;
    }
    else
    {
        return false;
    }
}
var catcher = palindrome("Na.#man");
console.log(catcher);