// Click event variables
const ej1Click = document.getElementById("ej1Click");
const ej2Click = document.getElementById('ej2Click');
const ej3Click = document.getElementById('ej3Click');

// Focus event variables
const ej1Focus = document.getElementById('ej1Focus');
const ej2Focus = document.getElementById('ej2Focus');
const ej3Focus = document.getElementById('ej3Focus');

// MouseOver event variables
const ej1MO = document.getElementById('ej1MO');
const ej2MO = document.getElementById('ej2MO');
const ej3MO = document.getElementById('ej3MO');

//funcion para generar un numero aleatorio
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

// Click events
ej1Click.addEventListener('click', function() {
    //funcion para generar un color aleatorio
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    this.style.backgroundColor = rndCol;
});

ej2Click.addEventListener('click', function() {
    alert('Presionaste el ejemplo 2');
});

ej3Click.addEventListener('click', function() {
    this.remove();
    alert('A continuación se eliminara el ejemplo 3');
});

// Focus events
// Se agrega un tabindex para que el elemento sea enfocable
ej1Focus.tabIndex = 0;
ej1Focus.addEventListener('focus', function() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    this.style.backgroundColor = rndCol;
});

ej2Focus.tabIndex = 0;
ej2Focus.addEventListener('focus', function() {
    this.querySelector('label').textContent = 'Focus detectado';
}, true);

ej3Focus.tabIndex = 0;
ej3Focus.addEventListener('focus', function() {
    this.style.border = '2px solid red';
}, true);

// MouseOver events
ej1MO.addEventListener('mouseover', (event) => {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    event.target.style.backgroundColor = rndCol;
    // reset the color after a short delay with setTimeout
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 500);
});

ej2MO.addEventListener('mouseover', function() {
    let label = this.querySelector('label');
    label.textContent = 'Mouse Over detectado';
});

ej2MO.addEventListener('mouseout', function() {
    let label = this.querySelector('label');
    label.textContent = 'Mouse Over fuera';
});

ej3MO.addEventListener('mouseover', function() {
    let button = this.querySelector('button');
    if (button) {
        button.style.display = 'none';
    } else {
        var newButton = document.createElement('button');
        newButton.textContent = 'Try click!';
        this.appendChild(newButton);
    }
});

ej3MO.addEventListener('mouseout', function() {
    let button = this.querySelector('button');
    if (button) {
        button.style.display = 'block';
    }
});