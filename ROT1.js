
function rot13(str) { // LBH QVQ VG!
    //console.log(str.length);
    let arr=[];
    let Str = '';
    for(let i=0; i<str.length; i++)
    {
        //console.log(str[i]);
        arr[i] = str.charCodeAt(i);
        if(arr[i] > 77)
        {
            Str += String.fromCharCode(arr[i]-13);
        }
        else if(arr[i]<=77)
        {
            Str += String.fromCharCode(arr[i]+13);
        }
        else
        {
            Str += arr[i];
        }

    }
    //console.log(arr, arr.length);
    console.log(Str);
}

// Change the inputs below to test
rot13("SERR YBIR?");
