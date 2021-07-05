//методы создания массива 
//let array = new Array();
//let array = [];
//значения массива записываются 
//через запятую
/*
let arrOne = [
    'Pitter',
    'Alice',
    'Denis',
];
//or
let arrTwo = ['Simon', 'Zak', 'Tereza',];
console.log(arrOne);
console.log(arrTwo);
//значения массивов
let array = [
    "Pitter", {
        age: 28,
        type: "JS",
    },
    true,
    function(){
        console.log("Hello, im Pitter");
    }
];
console.log(array);
//многомерные массивы
let matrix = [
    ["aloha, my name is Niccky", 32, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
//получение значений
let arrGet = [
    'Pitter', //0
    'Alice',  //1
    'Denis', //2
];
console.log(arrGet[2]);
console.log(arrGet[5]); //undefined

let array = [
    "Pitter", 
    {               //блочный элимент отдельно
        age: 28,
        type: "JS",
    },
    true,
    function(){
        console.log("Hello, im Pitter");
    }
];
console.log(array);
console.log(array[0]);
console.log(array[1].type); //вызов ключа в блоке
array[3](); //вызов функции
//вызов свойств в многомерном массива
let matrix = [
    ["aloha, my name is Niccky", 32, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][0]); 
//в нулевой массиве найти нулевое значение 
//Length
let arrTwo = ['Simon', 'Zak', 'Tereza',];
console.log(arrTwo);
console.log(arrTwo.length); //количество элиментов в массиве
let arrNew = arrTwo;
arrNew.length = 2;
console.log(arrTwo);
//изминения значений массива
let arrChange = [
    'Pitter', //0
    'Alice',  //1
    'Denis', //2
];
console.log(arrChange);
//меняем существующее
arrChange[0] = 'Donatelo';
//добавляем новое 
arrChange[3] = 'Teylor'; //добавляем новый ключ
// и присваевам ему значение
console.log(arrChange);
// Push - добавляем элимент в конец массива
arrChange.push('Stefaney', 'Barbara');
console.log(arrChange);
//shift - удаляет первый элимент сдвигая очередь
arrChange.shift();
console.log(arrChange);
//unshift - добавляем элимент в начало очереди
arrChange.unshift('Sandra', 'Patrik');
//метод рор удаляет последний элмент массива
let arrPop = ['Swift', 'Konor', 'Kenedi'];
arrPop.pop();
console.log(arrPop);
//удаление/добавлеение/изминения конкретных элементов
let arrDell = [
    'Ser',
    'Madam', 
    'Mister',
];
delete arrDell[1];
console.log(arrDell); 
console.log(arrDell[1]);
console.log(arrDell.length);
//Метод Splice
let arrSplice = [
    'Adam',
    'Eva',
    'Kaine',
    'Aval',
]; 
arrSplice.splice(1, 2)
//первое число это номер элимента, с которого начнеться удаление
// 2е это количество элиментов
console.log(arrSplice);
//удаляем элимент и присваеваем его переменной
let arrSpliceTwo = [
    'Adam',
    'Eva',
    'Kaine',
    'Aval',
];
let removed = arrSpliceTwo.splice(2, 2);
console.log(removed);
//заменяем элементы 
let arrSpliceThree = [
    'Adam',
    'Eva',
    'Kaine',   
    'Aval',
];
arrSpliceThree.splice(2, 2, 'Satan', 'God');
console.log(arrSpliceThree);
//добавляем элименты
let arrSpliceFour = [
    'Adam',
    'Eva',
    'Kaine',
    'Aval',
];
arrSpliceFour.splice(1, 0, 'Satan', 'God'); //ноль при добавлении
console.log(arrSpliceFour);

//Slice
//копируем часть массива 
let arrSlice = [
    'Adam',
    'Eva',
    'Kaine',   
    'Aval',
];
let resultSlice = arrSlice.slice(1, 2); // начиная С (номер значения) ПО (не включая последние значение)
console.log(resultSlice);
//копируем с конца
let arrSliceTwo = [
    'Adam',
    'Eva',
    'Kaine',   
    'Aval',
];
let resultSliceTwo = arrSliceTwo.slice(-3) //первое должно быть больше
console.log(resultSliceTwo);
//копируем весь массив 
let arrSliceCopy = arrSliceTwo.slice();
console.log(arrSliceCopy);
//Contac
let arrContact = [
    'Adam',
    'Eva',
    'Kaine',   
    'Aval',
];
let arrContactTwo = arrContact.concat('Evil');
console.log(arrContactTwo);
//indexOff
let arrIndexOff = [
    'Adam',
    'Eva',
    'Kaine',   
    'Aval',
];
console.log(arrIndexOff.indexOf('Eva'));
console.log(arrIndexOff.indexOf('Vasya'));
console.log(arrIndexOff.indexOf('Aval', 2));
//includes
console.log(arrIndexOff.includes('Eva'));
console.log(arrIndexOff.includes('Vasya'));
console.log(arrIndexOff.includes('Kaine', 1));
//поиск в массиве обьектов с определенным условием
//Find Findindex
let arrFind = [
    {name: 'Yuna', age: 28},
    {name: 'Sveta', age: 36},
    {name: 'Critin', age: 0}
,
];
let resultFind = arrFind.find(function (item, index, array){
    return item.age === 28;
});
console.log(resultFind);

//findIndex 
let resultFindIndex = arrFind.findIndex(item => item.age === 28);
console.log(resultFindIndex); //result 0
//Filter
let resultFilter = arrFind.filter(function (item, index, array) {
    return item.age >= 28;
});
console.log(resultFilter);
//Sort сортирует массив на месте, меняя в нем порядок элиментов 
//сортировка слов 
let arrSort = [
    'Anna',
    'Evdokia',
    'Onyfriy',
]
console.log(arrSort.sort()); //эти скобки в методах 
//для встроения в них функций
//сортировка чисел происходит лексикографический порядок 
//переводится в строку (не работает правильно)
let sortNum = [8, 22, 1];
console.log(sortNum.sort());
console.log("8" > "22");
//решить эту проблему поможет функция
/*function compareNumeric(a, b) {
    console.log(`сравниваем ${a} и ${b}`);
    if(a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    //return a - b
}
console.log(sortNum.sort(compareNumeric));
*/
/*
console.log(sortNum.sort((a, b) => a - b)); 
//Revers  меняет порядок элиментов на обратный
let arrRevers = [
    'Anna',
    'Evdokia',
    'Onyfriy',
];
console.log(arrRevers.reverse());
//Преобразование масссивов  
//Map
let arrMap = [
    'Anna',
    'Evdokia',
    'Onyfriy',
];
let resultMap = arrMap.map(function (item, index, array) { //возвращает новое значение вместо элимента
    return item[0];
});
console.log(arrMap);
console.log(resultMap);
//Метод Split 
let string = 'Andrey, Nikolay, Sergey';
let resultSplit = string.split(',');
let resultSplitTwo = string.split(',', 2); //ограничиваешь кол-во элиментов
console.log(resultSplit);
console.log(resultSplitTwo);
//and Join преобразовыет массив в строку
//работает наоборот
let join = [
    'Anna',
    'Evdokia',
    'Onyfriy',
];
let resultJoin = join.join(',');
console.log(resultJoin);
//получение строки с помощью классического преобразования 
console.log(String(join));
//тип данных массива это обьект
//проверка типа даннных 
let arrType = [];
//Array.isArray
if(Array.isArray(arrType)){     //в круглых скобках указываем то, что хотим проверить
    console.log('I m Array');
} else {
    console.log('I m not Array');
}
let arrFor = [
    "sare",
    "rare",
    "mare",
];
for(i = 0; i < arrFor.length; i++){
    console.log(arrFor[i]);
}
//For Of можно использовать для вывода значений 
let array = [
    "sare",
    "rare",
    "mare",
];
for(let arrayItem of array){
    console.log(arrayItem);
}
//метод forEach выполняет функцию для каждого элимента в массиве
let arrForEach = ['Andrey', 'Nikolay', 'Sergey'];
let resultForEach = arrForEach.forEach(function(item, index, array){
    console.log(`${item} stand on ${index} possition inside ${array}`);
});
//более простой вариант 
let arrShow = ['Andrey', 'Nikolay', 'Sergey'];
arrShow.forEach(show);
function show(item){
    console.log(item);
}
*/
//reduce
let arrReduce = [1, 2, 3, 4];
let resultReduce = arrReduce.reduce(function(previousValue, item, index, array){
    return previousValue + item;
}, 0); //ноль задаешь значение для PreVValue
console.log(resultReduce);