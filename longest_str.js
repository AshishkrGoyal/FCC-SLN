function longestWord(str) {
    var length = 0;
    var str1 = str.split(' ');
    for(var i=0; i<str1.length; i++)
    {
        if(str1[i].length>length)
        {
            length = str1[i].split('').length
        }
    }
    console.log(length);
    //console.log("Ashish".length);
}
longestWord("I Am Ashish @AshishkrGoyal");