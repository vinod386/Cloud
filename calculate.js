function calculate() {
    var x = document.getElementById("num").value;
    var flag = 0;
    for (var n = 1; n <= x ; n++) {
        if ((x % n) == 0) {
            flag++;
        }

        if (flag == 2) {
            document.getElementById("output").innerHTML = "This is a prime number";
        }
        else {
            document.getElementById("output").innerHTML = "This is not a prime number";
        }
    }
}