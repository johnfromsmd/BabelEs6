"use strict";

// // import * as 0app from './app'
// import forum from './app/forum'
// console.log(forum);
// // console.log(forum);
// let getData = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('berhasil')
//     } else {
//         reject('gagal')
//     }
// });
// console.log(getData);
var getData = new Promise(function (resolve, reject) {
  if (true) {
    resolve('berhasil');
  } else {
    reject('gagal');
  }
}).then(function (msg) {
  console.log(msg);
})["catch"](function (msg) {
  console.log('ini dalam catch' + msg);
});
console.log(getData);