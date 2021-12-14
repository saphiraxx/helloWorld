const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
const arco=document.getElementById("arcoIris")
const fred=document.getElementById("fred")

h1.addEventListener('mouseenter', function() {
    document.body.style.backgroundImage =
    'url("./img/rainbow-stars.gif")';
    h1.style.display="none";
    arco.style.display="none";
    h2.style.display="block";
    fred.style.display="block";
});

h1.addEventListener('mouseout', function() {
    document.body.style.backgroundImage = '';
    h1.style.display="block";
    arco.style.display="block";
    h2.style.display="none";
    fred.style.display="none";
});
