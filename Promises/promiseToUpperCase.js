function toUpperPromise (smallLetters) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            let bigLetters = [];
            smallLetters.forEach(letter => bigLetters.push(letter.toUpperCase()));
            resolve(bigLetters);
        }, 1000);
    });
};

function sortList(letters) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            resolve(letters.sort());
        }, 1000);
    });
};

function printList(letters) {
    letters.forEach(letter => console.log(letter));
};

function process(letters) {
    toUpperPromise(letters)
        .then(sortList)
        .then(printList)
}


var array = ["Bentley", "AUDI", "mercedes"];
process(array);