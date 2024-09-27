const urlParams = new URLSearchParams(window.location.search);
const setKey = urlParams.get('set');
const set = vocabularySets[setKey];

const list = document.getElementById('vocabulary-list');

if (set) {
    set.forEach(vocab => {
        const listItem = document.createElement('li');
        listItem.textContent = `${vocab.translation} - ${vocab.word}`;
        list.appendChild(listItem);
    });
} else {
    list.innerHTML = '<li>No vocabulary set found.</li>';
}
