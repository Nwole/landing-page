let num = 67;

let str = `hello ${num * 4} world`;
console.log(str);

let obj = {
    topic: 'Java',
    clas: 'c7',
    age: 67,
    'class teacher': 'chibuzor' 
};

console.log(obj.age, obj.clas, obj.topic);
console.log(obj['class teacher']);


let odds = [1,3,5,7,9]

console.log(odds[2]);
console.log(odds.length);

arr = [1, 2, 3, 4, 5, 6];

console.table(arr)
mappedArr = arr.map(item => item ** 2);
console.table(mappedArr);
filteredArr = arr.filter(item => item % 2 === 0)
console.log(filteredArr);

sumOfArr = arr.reduce((accumulator, item) => accumulator *= item);

console.log(sumOfArr);

