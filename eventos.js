const div = document.getElementById('solution');
const boton = document.getElementById('boton');

div.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

boton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert('Hola!');
});