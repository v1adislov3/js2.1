
let startValue = prompt('Введите число которое хотите транслировать в словестное значение');


let arrOne = { 1: "одна", 2: "две", 3: "три", 4: "четыре", 5: "пять", 6: "шесть", 7: "семь", 8: "восемь", 9: "девять" };

let arrTwo = { 0: "десять", 1: "одинадцать", 2: "двенадцать", 3: "тринадцать", 4: "четырнадцать", 5: "пятнадцать", 6: "шестнадцать", 7: "семнадцать", 8: "восемнадцать", 9: "девятнадцать", };

let arrTenth = { 2: "двадцать", 3: "тридцать", 4: "сорок", 5: "пятдесят", 6: "шестдесят", 7: "семдесят", 8: "восемдесят", 9: "девяносто", };

let arrTundredth = { 1: "сто", 2: "двести", 3: "триста", 4: "четыреста", 5: "пятьсот", 6: "шестьсот", 7: "семьсот", 8: "восемьсот", 9: "девятьсот", };

let arrStartValue2 = startValue.split("").reverse();


let arrResult = [];

let check = 0;

arrStartValue2.forEach((i, index) => {
    switch (index) {
        case 0:
            arrResult.push(arrOne[i]);
            check = i;
            break;
        case 1:
            if (i == 1) {
                arrResult = [];
                arrResult.push(arrTwo[check]);
            } else {
                arrResult.push(arrTenth[i]);
            }
            break;
        case 2:
            arrResult.push(arrTundredth[i]);
            break;
    }
});
arrResult.reverse();


if (arrStartValue2.length == 0) {
    arrResult.push("гривен");
} else if (arrStartValue2.length >= 2 && arrStartValue2[1] == 1) {
    arrResult.push("гривен");
} else if (check == 1) {
    arrResult.push("гривна");
} else if (check > 1 && check < 5) {
    arrResult.push("гривны");
} else {
    arrResult.push("гривен");
}


alert(`Ответ: ${arrResult.join(" ")}`);





