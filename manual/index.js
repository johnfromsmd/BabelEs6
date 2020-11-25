// eps 1
// function scopr var


// let dan const block scope

// let nama = 'Hilman';

// {
//     let nama ='John';
//     console.log(nama);
// }

// console.log(nama);

// function getName(){
//     if(true){
//         let nama = 'hilman nnnn';
//         console.log(nama);
//     }else{
//         console.log(nama);
//     }
// }
// getName();

// const person = {
//     id : 1,
//     name : 'JOhni',
// };

// person.name = 'fitra';
// person.age = 22;

// console.log(person);






// eps2
// syntax arrow 
// var members = ['fitra', 'joni', 'eee'];

// members.forEach((member) => {
//     console.log(member);
// });

// var members = ['fitra', 'joni', 'eee'];

// members.forEach((member, index) => {
//     console.log(member + ' ' + index)
// });

// let members = ['fitra', 'joni', 'eee'];

// let membersindex = members.map((member, index) => 
//     member + ' -- ' + index)

// console.log(membersindex);

/////////
// let members = ['fitra', 'joni', 'eee'];

// let sekolahKoding = {
//     members : ['fitra', 'joni', 'eee'],
//     getMembers(){
//         this.members.map((name) =>{
//             console.log(this);
//         });
//     }
// };

// console.log(sekolahKoding.getMembers());


// eps 3
// generateTitle = () => {
//     return 'ini judul standar'
// }
//     createTag = (title = generateTitle(), tag = 'bebas') => {
//         console.log(' Forum ' + title + ' punya tag ' + tag);
// }
// createTag();


// createTag = (title, tag = 'bebas') => {
//     console.log(' Forum ' + title + ' punya tag ' + tag);
// }

// createTag('tampilan rusak');


// eps 4 rest and spread
// signIn = (username, password, umur) => {
// signIn = (...membee) => {
//     // console.log(username + ' punya password ' + password + 'umurnya' + umur)
//     console.log(membee)
// }

// // let data = ['john', '123' , 40]
// username = 'hilman'
// password = '123'
// umur = '12'
// // signIn(...data)
// signIn(username, password, umur)


// eps 5 template literal 
// let username = 'john'
// let umur = 40

// // let text = "Member " + username + "umurnya " + umur;
// let text = `Member ${username} umur ${40}`
// let div = `
//             <div> ${username} </div>
//             <p> ${umur} </p>
//             `

// console.log(text)
// console.log(div)

// let username = 'john'
// let umur = 12
// test = (strings, username, umur) => {
//     let string1 = strings[0]
//     let string2 = strings[1]
//     // console.log(strings)
//     console.log(umur)
// }
// let output = test `nama saya adalah ${username} umurnya ${umur}`


// eps 6 shorthand dan destructing object
// names = 'john'
// umur = 12

// getData = () => {
//     return `member ${names} umur ${umur}`
// }

// let member = { 
//     names,
//     umur,
//     getData
// }
// console.log(member.getData())





// let member = { 
//     names : 'john',
//     umur : 12
// }

// let {names, umur : age} = member

// console.log(names, age)


// let umurss = [1,2,3]
// let [a,b,c] = umurss

// console.log(a+b+c)

// // class eps 7
// class Members{
//     constructor(name, umur){
//         this.name = name
//         this.umur = umur
//     }

//     // getMember(name){
//         // return 'namanya ' + name
//     // }
//     getData(name){
//         return `namanya ${this.name} dan umurnya ${this.umur}`
//     }

//     static getPoint(){
//         return ' poinnya 40'
//     }
// }

// // let member = new Members('John', 12)
// // let member = new Members()
// // console.log(member.getMember('John'))
// let member = new Members('John', 12)
// // console.log(member.getData())
// console.log(Members.getPoint())



// eps 8 promise
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
    console.log(getData);
});


















