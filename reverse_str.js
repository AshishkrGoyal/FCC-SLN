function reverse(str)
{
    /*step by step analysis of problem*/
    /*var str1 = str.split('');
    //console.log(str1);
    var str2 = str1.reverse();
    //console.log(str2);
    var str3 = str2.join('');
    console.log(str3);*/

    /*In a single line how reverse string*/
    return str.split('').reverse().join('');
}
var catcher = reverse("AshishkrGoyal");
console.log(catcher);