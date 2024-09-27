const vocabularySets = {
    set1: [
        { translation: "House", word: "Haus" },
        { translation: "Dog", word: "Hund" },
    ],
    set2: [
        { translation: "Car", word: "Auto" },
        { translation: "Tree", word: "Baum" },
    ]
};

function showVocabularySets() {
    const container = document.getElementById('sets-container');
    container.innerHTML = '';

    Object.keys(vocabularySets).forEach(setKey => {
        const setDiv = document.createElement('div');
        setDiv.className = 'vocabulary-set';
        setDiv.textContent = `Set ${setKey}`;
        setDiv.onclick = () => selectSet(setKey);
        container.appendChild(setDiv);
    });
}

function selectSet(setKey) {
    const selectionPage = `selection.html?set=${setKey}`;
    window.location.href = selectionPage;
}

window.onload = showVocabularySets;
