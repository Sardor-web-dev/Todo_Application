const openModalBtn = document.querySelector('#openModal')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalContent = document.querySelector(".modal-content");

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
