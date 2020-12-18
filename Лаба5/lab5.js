let n;
let array = []

function arrInit() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * 150) - 50
    }
    return array;
}

function mmm() {
    let min = 101;
    let max = -1;
    let median;

    for (let i = 0; i < n; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }

    array.sort()
    if (n % 2 === 0) {
        median = (array[n / 2] + array[n / 2 - 1]) / 2
    } else {
        median = array[Math.round(n / 2) - 1]
    }
    return "Min: " + min + " Max: " + max + " Median: " + median;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1 : right;
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}


function countTags() {
    let collection = document.getElementsByTagName("*");

    var tagNames = {};
    for (let i = 1; i < collection.length; i++) {
        tagNames[collection[i].tagName] = (tagNames[collection[i].tagName] || 0) + 1;
    }
    Object.keys(tagNames).map(t => console.log(`${t} - ${tagNames[t]}`))
    console.log(tagNames)

    let uniuqeSet = new Set(tagNames);
    tagNames = [...uniuqeSet];

    for (let i = 1; i < tagNames.length; i++) {
        console.log(tagNames[i].toLowerCase() + " - " + document.getElementsByTagName(tagNames[i]).length);
    }
}

n = 1000;
console.log("Array: " + arrInit());
console.log("Array Stats: " + mmm());
console.log("QuickSort: " + quickSort(array, 0 , n - 1));
console.log("Tags Count: ");
countTags();