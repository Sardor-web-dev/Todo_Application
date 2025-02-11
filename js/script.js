const openModalBtn = document.querySelector('#openModal')
const openCardModal = document.querySelector('#openCardModal')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const main = document.querySelector('.main-content')
const taskList = document.querySelector('.task-list')

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.remove('hidden');
    document.querySelector('form[name="addCard"]').classList.add('hidden');
}


openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.add('hidden');
    document.querySelector('form[name="addCard"]').classList.remove('hidden');
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
}

reload();


