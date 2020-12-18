var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];;
 
 
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
