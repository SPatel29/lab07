function init() {
    //add your javascrip between these two lines of code
    function alertFunction() {

        var getText = document.getElementById("entryinput").value;
        var header = document.getElementById("textoutput");

        alert("Sunny Patel: " + getText);
        header.innerHTML = getText;

    }

    var alertDiv = document.getElementById('entrybutton');

    alertDiv.addEventListener("click", alertFunction);



}
window.addEventListener('load', init);
