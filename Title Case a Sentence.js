/*
function titleCase(str) {
    var str1 = str.split(' ');
    //console.log(str1);
    var strFinal = '';
    var strFir = '';
    for(let i=0;i<str1.length; i++)
    {

        if(str1[i].length===1)
        {
            //strFir = str1[i].toUpperCase();
            //console.log(str1[i].toUpperCase());
            //console.log(strFir);
            strFir = str1[i].toUpperCase();
        }
        else
        {
            var str2 = str1[i].split('');
            //var str2a = str2[0].toUpperCase();
            //console.log(str2a);
            str2[0] = str2[0].toUpperCase();
            //console.log(str2[0]);
            var str2b = '';
            for(let j=1;j<str2.length; j++)
            {
                var secStr = str2[j].toLowerCase();
                str2b = str2b + secStr;
            }
            str1[i] = str2b;
            //console.log(str1[i]);
        }
        //console.log(str1[i]);

        //return str1[i].toUpperCase()+str2a+str2b;
    }
    console.log(strFir);
}

var catcher = titleCase("A k G");
console.log(catcher);*/
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    //console.log(str.search(/[G]/gi));
    //str = str.split(' ');
    //ashishkumar //goyal //ashishkrgoyal

    for(var i=0; i<str.length; i++)
    {
        str[i] = str[i].split('');
        //a,s,h,i,s,h,k,u,m,a,r
        str[i][0] = str[i][0].toUpperCase();
        //A,s,h,i,s,h,k,u,m,a,r
        str[i] = str[i].join('');
        //Ashishkumar
        //console.log(str[i]);
    }
    console.log(str.join(' '));
}
titleCase("ashishKumar Goyal AshishkrGOYAL");