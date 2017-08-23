function repeatStringNumTimes(str, num) {

    if(num >= 0)
    {
        var str1 = str;
        for(let i=1; i<num; i++)
        {
            str = str1+str;
        }
        // repeat after me
        return str;
    }
    else
    {
        return "";
    }


}

repeatStringNumTimes("abc", 3);
