const urlParams = new URLSearchParams(window.location.search);
const setKey = urlParams.get('set');
const set = vocabularySets[setKey];

const container = document.getElementById('flashcards-container');

if (set) {
    set.forEach(vocab => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `<div class="front">${vocab.translation}</div><div class="back">${vocab.word}</div>`;
        container.appendChild(card);
    });
} else {
    container.innerHTML = '<p>No vocabulary set found.</p>';
}

document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
