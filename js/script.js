const openModalBtn = document.querySelector('#openModal');
const openCardModal = document.querySelector('#openCardModal');
const closeModal = document.querySelectorAll('#closeModal');
const modal = document.getElementById('modal');
const main = document.querySelector('.main-content');
const taskList = document.querySelector('.task-list');
const cardForm = document.querySelector('form[name="addCard"]');
const taskForm = document.querySelector('form[name="addTask"]');
const cardSelect = document.createElement('select');
const addCardBtn = document.querySelectorAll('.submit-task');

taskForm.insertBefore(cardSelect, taskForm.firstChild);

function updateCardSelect() {
    cardSelect.innerHTML = '';
    todoCards.forEach((card, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = card.title;
        cardSelect.appendChild(option);
    });
}
addCardBtn.forEach((b) => {
    b.onclick = () => {
        modal.classList.add('hidden')
        taskForm.classList.add('hidden')
        cardForm.classList.add('hidden')
    }
})
openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    taskForm.classList.remove('hidden');
    cardForm.classList.add('hidden');
    updateCardSelect();
};

openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    taskForm.classList.add('hidden');
    cardForm.classList.remove('hidden');
};

closeModal.forEach((cm) => {
    cm.onclick = () => {
        modal.classList.add('hidden');
    };
});

reloadCard(todoCards);

cardForm.onsubmit = (e) => {
    e.preventDefault();

    const card = {
        id: Math.random(),
        title: cardForm.querySelector('[name="title"]').value,
        tasks: []
    };

    todoCards.push(card);
    reloadCard(todoCards);
    updateCardSelect();
    cardForm.reset();
};

taskForm.onsubmit = (e) => {
    e.preventDefault();

    const selectedCardIndex = cardSelect.value;
    if (selectedCardIndex < 0) return;

    const task = {
        id: Math.random(),
        title: taskForm.querySelector('.task-input').value,
        type: taskForm.querySelector('#task_type').value,
        difficulty: taskForm.querySelector('#task_dificulty').value,
        date: taskForm.querySelector('.task-date').value,
        notes: taskForm.querySelector('.task-notes').value,
        isDone: false
    };

    todoCards[selectedCardIndex].tasks.push(task);
    reloadCard(todoCards);
    taskForm.reset();
};
