const correo=document.getElementById('img_correo');
const form = document.querySelector('.form');

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    correo.style.left = '10%';
    correo.style.opacity = '0';

    setTimeout(() => {
        correo.style.left = '-0%';
        correo.style.opacity = '1';
        form.reset();
    }, 500);
})