const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open1.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open2.addEventListener('click', () => {
    modal_container.classList.add('show');
});
open3.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});