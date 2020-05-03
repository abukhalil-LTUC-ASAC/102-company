function addSub() {
    var subjects = ["math","english","science","art","ls","religion"];

    for (i=0; i<subjects.length; i++) {
        var answer = prompt("Do you want to learn " + subjects[i] + " this week?", "y/n");
        while (answer != "y" && answer != "n") {
            answer = prompt("Please answer y or n for " + subjects[i]);
        }
        if (answer == "y"){
        document.getElementById(subjects[i]).style.display = "block";
        }
    }
}