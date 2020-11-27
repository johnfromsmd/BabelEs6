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

// let getData = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('berhasil')
//     } else {
//         reject('gagal')
//     }
// }).then((msg) => {
//     console.log(msg);
// }).catch((msg) => {
//     console.log('ini dalam catch' + msg);
// })

// console.log(getData);

// let getData = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('berhasil')
//     } else {
//         reject('gagal')
//     }
// })

// console.log(getData.then((msg) => {
//     console.log('ini dalam then2' + msg)
// }, (msg) => {
//     console.log('ini dalam catch2 ' + msg)
// }))


let getData = () => {
    return new Promise ((resolve, reject) => {

    })
}

console.log(getData())