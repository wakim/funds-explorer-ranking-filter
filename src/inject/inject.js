const showAll = table => {
    for (tr of table.querySelectorAll('tbody tr')) {
        tr.style.display = 'table-row';
    }
};

const filterTable = (table, terms) => {
    for (tr of table.querySelectorAll('tbody tr')) {
        const fundName = tr.cells[0].textContent;
        const shouldKeep = terms.filter(term => fundName.toUpperCase().startsWith(term.toUpperCase())).length > 0;

        tr.style.display = shouldKeep ? 'table-row' : 'none';
    }
}

const updateHash = terms => {
    let hash = '';
    if (terms.length > 0) {
        hash = `#${encodeURIComponent(terms.join(', '))}`;
    }
    const url = `${window.location.pathname}${window.location.search}${hash}`
    window.history.replaceState({}, document.title, url);
};

const handleFilter = text => {
    const terms = text.split(',').map((value) => value.trim()).filter(term => term.length > 0);
    const table = document.querySelector('#table-ranking');

    updateHash(terms);

    if (terms.length == 0) {
        showAll(table);
    } else {
        filterTable(table, terms);
    }
};

const handleKeyUp = e => {
    const keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode == '13') {
        handleFilter(e.target.value);
    }
};

const clearFilter = input => {
    input.value = '';
    handleFilter('');
};

const createFilterDOM = () => {
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    const filterButton = document.createElement('button');
    const clearButton = document.createElement('button');

    wrapper.className = 'wrapper__filter';

    input.placeholder = 'Entre com os fundos separados por vírgula';
    input.className = 'input__filter';
    input.onkeyup = (event) => handleKeyUp(event);

    filterButton.innerText = 'Filtrar';
    filterButton.onclick = (event) => handleFilter(input.value);
    filterButton.className = 'button__filter';

    clearButton.innerText = 'Limpar';
    clearButton.onclick = () => clearFilter(input);
    clearButton.className = 'button__clear';

    wrapper.append(input, filterButton, clearButton);

    return wrapper;
};

const setupDOM = () => {
    const targetSibling = document.querySelector('.section-body');
    const filterDom = createFilterDOM();

    targetSibling.parentNode.insertBefore(filterDom, targetSibling);
};

const updateFilterWithHash = () => {
    debugger;
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));

    document.querySelector('.input__filter').value = hash;

    if (hash.length > 0) {
        handleFilter(hash);
    }
};

const setupFilter = () => {
    setupDOM();
    updateFilterWithHash();
};


chrome.extension.sendMessage({}, function(response) {
    const readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        setupFilter();
    }
    }, 10);
});