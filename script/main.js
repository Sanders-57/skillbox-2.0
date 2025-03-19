
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

// let n = -3,
//     m = -10,
//     max = Math.max(n, m),
//     min = Math.min(n, m)

// console.log(Math.round(Math.random() * (max - min)) + min);


// const password = '_-a'

// if(password.length >= 4 && (password.includes('-') || password.includes('_'))){
//   console.log('Пароль надежный!');
// } else {
//   console.log('Пароль шляпа!');
// }

// const name = 'Alex',
//       surName = 'Gusakov'

// const name1 = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()

// const surName1 = surName.substring(0, 1).toUpperCase() + surName.substring(1).toLowerCase()
// console.log(name1, surName1);

// name === name1 && surName === surName1 ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');

// const m = 100,
//       n = 0,
//       count = 100, 
//       arr = []
// let i


// for (i = 0; i <= count; i++)  {
// let elem = Math.round(Math.random() * (m - n)) + n
// arr.push(elem)
// }  

// console.log(arr);


// const str = 'Привет, мир!',
//       arr = []

// // console.log(str.length -1);
// for(let i = str.length -1; i >= 0; i--){
//   arr.push(str[i])
// }
// console.log(arr.join(''));

// // const str1 = "→Привет, Мир!";
// // let strRev = ""; // строка в обратном порядке
// // for (i = str1.length-1; i >= 0; i--) {
// //   strRev += str1[i];
// // }
// // console.log(strRev);

// roadMines = [true, false, false, false, false, false, false, false, false, true] 
// let i = 0

// while (i <= roadMines.length){
//   console.log(`Танк переместился на позицию ${i + 1}`);
//   if(roadMines[i] === true){    
//     console.log('Танк подбит');    
//   }  
//   i++
//   if(roadMines[i] === true){    
//     console.log('Танк убит');   
//     break 
//   }   
// }

roadMines = [true, false, false, false, false, false, false, false, false, true] 
let i = 0
let leaves = 2

while (i < roadMines.length){
  console.log(`Танк переместился на позицию ${i + 1}`);

  if(roadMines[i]){    
    leaves--   
    console.log('Танк подбит'); 
  }  
  if(leaves === 0){    
    console.log('Танк убит');   
    break 
  }   
  i++
}

// const week = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

// let numbers  = Math.round(Math.random() * (31 - 1)) + 1
// console.log(`Сегодня ${numbers} Января, день недели: ${week[(numbers - 1) % 7]}`);
// console.log(numbers);
// console.log(numbers % 7);