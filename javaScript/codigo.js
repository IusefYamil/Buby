const circulo = document.getElementById('circulo');
const circulo1 = document.getElementById('circulo1');

let isMoved = false;
let isMoved1=false;

circulo.addEventListener('click', () => {
    circulo.style.marginLeft = '68%';
    if (isMoved) {
        circulo.style.marginLeft = '-68%';
        isMoved = false;
    } else {
        circulo.style.marginLeft = '60%';
        isMoved = true;
    }
});

circulo1.addEventListener('click', () => {
    circulo1.style.marginLeft = '68%';
    if(isMoved1){
        circulo1.style.marginLeft = '-68%';
        isMoved1 = false;
        alert("Se mueve para la izquierda!!!"); 
    }else{
        circulo1.style.marginLeft = '60%';
        isMoved1 = true;
        alert("Se mueve para la derecha!!!"); 
    }
});

const ovalada= document.getElementById('cu2');

ovalada.addEventListener('click', () => {
    ovalada.classList.toggle('rotado')
       
});