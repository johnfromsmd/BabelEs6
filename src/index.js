// // import * as 0app from './app'
// import forum from './app/forum'
// console.log(forum);
// // console.log(forum);

let getData = new Promise ((resolve, reject) => {
    if (true) {
        resolve('berhasil')
    } else {
        reject('gagal')
    }
});

console.log(getData);