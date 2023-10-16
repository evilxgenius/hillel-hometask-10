// 1. Створити масив, довжину та елементи якого задає користувач.
// 2. Відсортувати масив за зростанням.
// 3. Видалити елементи з масиву з 2 по 4 (включно!).
// 4. У міру змін виводити вміст масиву на сторінку.

function intNumberInput(question, defaultAnswer = '') {
    let number = NaN;

    while (isNaN(number)) {
        let answer = prompt(`${question}`, defaultAnswer);

        if (answer === null)
            //If the user clicks Cancel, the script will say 'Bye'
            return null;
        else if (answer.trim().length === 0 || isNaN(+answer) || +number < 1)
            // If the user inputs '', NaN or zero/negative number,
            // the script will ask the user to input a number again
            alert(`You passed <${answer}>. Please pass a positive Number!`);
        else
            number = +answer;
    }

    return Math.round(number);
}

function getArrayLengthFromUser() {
    return intNumberInput('Put the length of new array(Float values will be rounded):', '5');
}

function getNewArrayFromUser(length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        let number = intNumberInput(`Put an element of array(index - ${i} of ${length - 1}):`);

        if (number !== null) arr[i] = number;
        else return;
    }

    return arr;

    // Більш елегантний варіант, але якщо користувач натисне Cancel,
    // не вдасться зупинити створення нового массиву
    // return new Array(length).fill(undefined).map((_item, i) => {
    //     return intNumberInput(`Put an element of array(index - ${i}):`);
    // });
}

function sayBye () { alert('Bye!'); }

function exerciseWithArray() {
    let arrLength, arrFromUser;
    let sortedArr, splicedOriginalArr, splicedSortedArr;

    arrLength = getArrayLengthFromUser();

    if (!arrLength) {
        sayBye();
        return;
    }

    arrFromUser = getNewArrayFromUser(arrLength);

    if (!arrFromUser) {
        sayBye();
        return;
    }

    sortedArr = arrFromUser.toSorted((n1, n2) => n1 - n2);
    splicedOriginalArr = arrFromUser.toSpliced(1, 3);
    splicedSortedArr = sortedArr.toSpliced(1, 3);

    alert(
        `You created a new array: [ ${arrFromUser} ]\n` +
        `Sorted version of the array: [ ${sortedArr} ] \n` +
        `Spliced version of the original array: [ ${splicedOriginalArr} ]\n` +
        `Spliced version of the sorted array: [ ${splicedSortedArr} ]`
    );

    sayBye();
}

exerciseWithArray();


