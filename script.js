const openModalBtn = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalContent = document.querySelector(".modal-content");

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
}

document.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target) && !e.target.closest('#openModal')) {
        modal.classList.add('hidden');
    }
});
