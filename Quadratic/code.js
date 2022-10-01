function TCH(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d = b*b-4*a*c;
    var x1, x2;
    if (a==0){
        x1 = -c/b;
    }
    else if (d>=0){
        x1 = (-b+Math.sqrt(d))/(2*a);
        x2 = (-b-Math.sqrt(d))/(2*a);
    }
    else{
        d = -d;
        x1 = -b/(2*a) + "+" + Math.sqrt(d)/(2*a) + "i";
        x2 = -b/(2*a) + "-" + Math.sqrt(d)/(2*a) + "i";
    }

    document.getElementById("printAns").innerHTML = "x1 = " + x1;
    if (a!==0) document.getElementById("printAns2").innerHTML = "x2 = " + x2;

}
