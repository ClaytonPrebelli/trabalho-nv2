const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função para embaralhar os elementos de um vetor
const misturar = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

// Função Bubble Sort para ordenar um vetor de inteiros
const bubble_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// Função Selection Sort para ordenar um vetor de inteiros
const selection_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
};

// Função Quick Sort para ordenar um vetor de inteiros
const quick_sort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(array, left, right);
        quick_sort(array, left, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, right);
    }
};

// Função de apoio para o Quick Sort
const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};

function add() {
    const input = document.getElementById('valor');
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        const list = document.getElementById('valores');
        const node = document.createElement('li');
        node.appendChild(document.createTextNode(value));
        list.appendChild(node);
    }
}

function ordenar() {
    const list = document.getElementById('valores');
    const algorithmSelect = document.getElementById('algoritmo');
    const algorithm = algorithmSelect.value;
    const values = Array.from(list.children).map(item => parseInt(item.innerHTML));
    
    switch (algorithm) {
        case 'bubble':
            bubble_sort(values);
            break;
        case 'selection':
            selection_sort(values);
            break;
        case 'quick':
            quick_sort(values);
            break;
        default:
            break;
    }

    list.innerHTML = values.map(value => `<li>${value}</li>`).join('');
}

function misturar() {
    const list = document.getElementById('valores');
    const values = Array.from(list.children).map(item => parseInt(item.innerHTML));
    misturar(values, values.length * 2);
    list.innerHTML = values.map(value => `<li>${value}</li>`).join('');
}