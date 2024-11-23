let userName = 'жоРА';
let userSureName = 'бАрДюР';

let accurateName = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();

let accurateSureName = userSureName.substring(0, 1).toUpperCase() + userSureName.substring(1).toLowerCase();

let result = accurateName != userName || accurateSureName != userSureName ? 'Имя было преобразованно' : 'Имя осталось без изменений';

console.log(accurateName, accurateSureName, result);
