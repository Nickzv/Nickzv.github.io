document.addEventListener('DOMContentLoaded', function () {
    
    const btn = document.querySelector('.btn-mode');
    const container = document.querySelector('.container');

    btn.onclick = function () {
        this.classList.toggle('active');
        container.classList.toggle('active');
    }
});

ScrollReveal({ reset: true });
ScrollReveal().reveal('.apresentacao', {delay: 700});



var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + 'px';
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px';
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px';
})