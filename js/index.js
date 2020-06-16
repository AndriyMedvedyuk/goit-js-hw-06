"use strict";
import users from "./users.js";

// // *** 1 ***

const getUserNames = (users) => {
  const Arr = users.map((el) => el.name);
  return Arr;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // *** 2 ***

const getUsersWithEyeColor = (users, color) => {
  const filterArr = users.filter((el) => el.eyeColor === color);
  return filterArr;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// // *** 3 ***

const getUsersWithGender = (users, gender) => {
  const Arr = users.filter((el) => el.gender === gender).map((el) => el.name);
  return Arr;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // *** 4 ***

const getInactiveUsers = (users) => {
  const Arr = users.filter((el) => !el.isActive);
  return Arr;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// // *** 5 ***

const getUserWithEmail = (users, email) => {
  const findOne = users.find((el) => el.email === email);
  return findOne;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// // *** 6 ***

const getUsersWithAge = (users, min, max) => {
  const Arr = users.filter((el) => el.age >= min && el.age <= max);
  return Arr;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // *** 7 ***

const calculateTotalBalance = (users) => {
  const totalbalance = users.reduce((acc, value) => acc + value.balance, 0);
  return totalbalance;
};

console.log(calculateTotalBalance(users)); // 20916

// // *** 8 ***

const getUsersWithFriend = (users, friendName) => {
  const Arr = users
    .filter((el) => el.friends.some((el) => el === friendName))
    .map((el) => el.name);

  return Arr;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // *** 9 ***

const getNamesSortedByFriendsCount = (users) => {
  const Arr = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((el) => el.name);
  return Arr;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // *** 10 ***

const getSortedUniqueSkills = (users) => {
  let arr = [];
  users.forEach((el) => (arr = [...arr, ...el.skills]));
  arr.sort();
  const newArr = arr.filter((el, ind) => arr.indexOf(el) === ind).sort();
  return newArr;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
