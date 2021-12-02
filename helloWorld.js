//mouseover
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
const gif=document.getElementById("gif")
const fred=document.getElementById("fred")
const body=getSelection("body")

h1.addEventListener("mouseover", function() {

    h1.style.display="none";
    console.dir("body")
    h2.style.display="block";
    fred.style.display="block";


});

//mouseout
h1.addEventListener("mouseout", function() {

    h1.style.display="block";
    h2.style.display="none";
    fred.style.display="none";

});