
// let getArea = (x1,x2,y1,y2) => {
//   let area = Math.abs((x2 - x1) * (y2 - y1))
//   console.log(area);
// }
// getArea(-5, 10, 8, 5)


// let a = 13.123456789,
//     b = 2.123,
//     n = 5
// let procesion = Math.pow(10, n)
// console.log(Math.round(a * procesion));

let n = -3,
    m = -10,
    max = Math.max(n, m),
    min = Math.min(n, m)

console.log(Math.round(Math.random() * (max - min)) + min);


const password = '_-a'

if(password.length >= 4 && (password.includes('-') || password.includes('_'))){
  console.log('Пароль надежный!');
} else {
  console.log('Пароль шляпа!');
}

const name = 'Alex',
      surName = 'Gusakov'

const name1 = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()

const surName1 = surName.substring(0, 1).toUpperCase() + surName.substring(1).toLowerCase()
console.log(name1, surName1);

name === name1 && surName === surName1 ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');