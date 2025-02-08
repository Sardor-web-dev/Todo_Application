const open = document.getElementById('openModal');
const close = document.getElementById('openModal');
const  modal =  document.getElementById('modal');

open.onclick = () => {
    modal.classList.remove('hidden')
}

close.onclick = () => {
    modal.classList.add('hidden')
}
