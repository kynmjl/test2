const urlParams = new URLSearchParams(window.location.search);
const setKey = urlParams.get('set');

const optionsContainer = document.getElementById('options-container');

const options = [
    { title: 'Flash Cards', page: 'flashcards.html' },
    { title: 'Vocabulary List', page: 'vocabularyList.html' }
];

options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = option.title;
    optionDiv.onclick = () => window.location.href = `${option.page}?set=${setKey}`;
    optionsContainer.appendChild(optionDiv);
});
