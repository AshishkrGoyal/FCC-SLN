function factorial(number) {
    var fact = 1;
    for(var i=number; i>1; i--)
    {
        fact = fact*i;
        //console.log(fact);
    }
    console.log(fact);
}

factorial(5);