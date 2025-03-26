
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

// roadMines = [true, false, false, false, false, false, false, false, false, true] 
// let i = 0
// let leaves = 2

// while (i < roadMines.length){
//   console.log(`Танк переместился на позицию ${i + 1}`);

//   if(roadMines[i]){    
//     leaves--   
//     console.log('Танк подбит'); 
//   }  
//   if(leaves === 0){    
//     console.log('Танк убит');   
//     break 
//   }   
//   i++
// }

// const week = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

// let numbers  = Math.round(Math.random() * (31 - 1)) + 1
// console.log(`Сегодня ${numbers} Января, день недели: ${week[(numbers - 1) % 7]}`);
// console.log(numbers);
// console.log(numbers % 7);

// const checkEmail = (email, blackList) => {
//   let whiteList = []
//   for(let i = 0; i < email.length; i++){
//    if(!blackList.includes(email[i])){
//     whiteList.push(email[i])
//    }
//   }
//   console.log(whiteList);
// }
// checkEmail(['asd@mail.ru', 'qwe@mail.ru', 'zxc@mail.ru', '123@mail.ru', '321@mail.ru'], ['123@mail.ru', '321@mail.ru']);

// const saleBasket  = (sum,amount, promo) => {
//   if(sum <= 300 && promo === 'ДАРИМ300'){
//     sum = 0
//   } else if(promo === 'ДАРИМ300'){
//     sum -= 300
//     console.log(`Проммокод ДАРИМ300 ${sum}`);
//   }
//   if(amount >= 10){
//     sum *= 0.95
//     console.log(`товаров в корзине более 10 шт. ${sum}`);
//   }
//   if(sum > 50000){
//     sum = (sum - ((sum - 50000) * 0.2))
//     console.log(`Товаров более чем на 50к ${sum}`);
//   }
//   if(promo === 'СКИДКА15' && sum >= 20000){
//     sum *= 0.85
//     console.log(`Скидка по проммокоду СКИДКА15 ${sum}`);
//   }
//  return sum
// }
// console.log(saleBasket(75000, 20, 'ДАРИМ300'));

let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]

// const getUser = (obj, name, userName) => {
//   return obj.map(user => {
//     if(user.name === userName){
//       // console.log(user);
//       return user
//     }
//   })
// }

// const getUser = (obj, name, userName) => {
//   return obj.filter(user => user.name === userName)
// }

// console.log(getUser(objects, 'name', 'Иван'));



const city = {
  kazan: 'Казань',
  ufa: 'Уфа',
  moscow: 'Москва',
  peterburg: 'Санкт-Петербург'
}

let form = document.createElement('form'),
    label = document.createElement('label'),
    select = document.createElement('select')
label.textContent = 'Выберите ваш город'
label.htmlFor = 'city-select'
select.id = 'city-select'
document.body.append(form)
form.appendChild(label)
form.appendChild(select)


const getCity = (obj) => {
  let intries = Object.entries(obj)
  for(let entry of intries){
    let option = document.createElement('option')
    option.value = `${entry[0]}`
    option.textContent = `${entry[1]}`
    select.appendChild(option)
  }
}
getCity(city)