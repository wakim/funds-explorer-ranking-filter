const HELP_ICON_BASE_64 = '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';

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

const createInput = () => {
    const input = document.createElement('input');
    
    input.placeholder = 'Entre com os fundos separados por vírgula';
    input.className = 'filter__input';
    input.onkeyup = (event) => handleKeyUp(event);

    return input;
};

const createFilterButton = (input) => {
    const filterButton = document.createElement('button');
    
    filterButton.innerText = 'Filtrar';
    filterButton.onclick = (event) => handleFilter(input.value);
    filterButton.className = 'filter__submit';

    return filterButton;
};

const createClearButton = (input) => {
    const clearButton = document.createElement('button');

    clearButton.innerText = 'Limpar';
    clearButton.onclick = () => clearFilter(input);
    clearButton.className = 'filter__clear';

    return clearButton;
};

const createHelpTooltip = () => {
    const image = document.createElement('img');

    image.className = 'filter__help';
    image.src = `data:image/png;base64, ${HELP_ICON_BASE_64}`;
    image.title = 'Funções:\n ✓ Entre com os tickers separados por virgula (e.g: VISC11, VINO, HC, XP).\n ✓ Pode usar o enter para filtrar.\n ✓ Você pode salvar o filtro copiando a URL.';
    image.onclick = () => alert(image.title);

    return image;
};

const createFilterDOM = () => {
    const wrapper = document.createElement('div');

    wrapper.className = 'filter__wrapper';

    const input = createInput();
    const filterButton = createFilterButton(input);
    const clearButton = createClearButton(input);
    const helpTooltip = createHelpTooltip();

    wrapper.append(input, filterButton, clearButton, helpTooltip);

    return wrapper;
};

const setupDOM = () => {
    const targetSibling = document.querySelector('.section-body');
    const filterDom = createFilterDOM();

    targetSibling.parentNode.insertBefore(filterDom, targetSibling);
};

const updateFilterWithHash = () => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));

    document.querySelector('.filter__input').value = hash;

    if (hash.length > 0) {
        handleFilter(hash);
    }
};

const shouldRun = () => {
    return Boolean(document.querySelector('#table-ranking'));
};

const setupFilter = () => {
    if (!shouldRun()) {
        return;
    }
    
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