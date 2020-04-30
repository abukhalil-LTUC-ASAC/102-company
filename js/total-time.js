function countTime(){
    var basicTime = 100;
    var checkedValue = 0; 
    var inputElements = document.getElementsByClassName('checkbox');
    for (var i=0; i < inputElements.length; i ++) {
        if (inputElements[i].checked) {
            checkedValue += parseInt(inputElements[i].value, 10);
        }
     }
     basicTime = basicTime-checkedValue
     document.getElementById("float-progress").innerHTML = "You need to study " + basicTime + "hrs more to finish your first revision!";
}
