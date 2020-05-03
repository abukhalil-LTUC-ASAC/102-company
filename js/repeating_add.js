function myTime() {
    var sel = document.getElementById('time'); 
    document.getElementById('my_time').innerHTML = "<br>";

    var x =0;
    for (i=0; i<sel.value; i++) {
        x += 1;
        document.getElementById('my_time').innerHTML +=x + "&emsp;" + Date() + "<br>";
    }
}