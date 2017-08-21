function largestOfFour(arr) {
    // You can do this!
    //var len = arr.length;

    var finalArr = [];
    var max;
    for(let i=0; i<arr.length; i++)
    {
        //console.log("Ashishkr")
        //var len_again = arr[i].length;
        max = arr[i][0];
        //console.log(max);
        for(let j=0; j<arr[i].length; j++)
        {
            //console.log("Ashishkr")
            if(arr[i][j]>max)
            {
                //console.log("Ashishkr");
                max = arr[i][j];
                //console.log(max);
            }
        }
        finalArr.push(max);
    }
   console.log(finalArr);
    //return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
