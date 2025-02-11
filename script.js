const openModalBtn = document.querySelector('#openModal')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalContent = document.querySelector(".modal-content");
const input = document.querySelector(".task-input");
const select = document.querySelector("#task_type");
const select2 = document.querySelector("#task_dificulty");
const date = document.querySelector('.task-date');
const note = document.querySelector(".task-notes");
const btnadd = document.querySelector('.submit-task')

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
}

document.onclick = (e) => {
    if (modal.contains(e.target) && !modalContent.contains(e.target)) {
        modal.classList.add('hidden');
    }
}

