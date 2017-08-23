function truncateString(str, num) {
    // Clear out that junk in your trunk
   let str1 =  str.split('');
   //console.log(str1);
   //console.log(str1.length);

    var str2 = [];
    if(num>=3 && num!==str.length && num<str.length)
    {
        for(let i=0; i<num-3; i++)
        {
            str2[i] = str1[i];
            //console.log(str2);
        }
        str2 = str2.join('');
        str2 = str2+"...";
        console.log(str2);
        return str2;
    }
    else if(num<=3 && num!==str.length && num<str.length)
    {
        for(let i=0; i<num; i++)
        {
            str2[i] = str1[i];
            //console.log(str2);
        }
        str2 = str2.join('');
        str2 = str2+"...";
        console.log(str2);
        return str2;
    }
    else
    {
        for(let i=0; i<num; i++)
        {
            str2[i] = str1[i];
            //console.log(str2);
        }
        str2 = str2.join('');
        console.log(str2);
        return str2;
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
