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
generateTitle = () => {
    return 'ini judul standar'
}
    createTag = (title = generateTitle(), tag = 'bebas') => {
        console.log(' Forum ' + title + ' punya tag ' + tag);
}
createTag();


// createTag = (title, tag = 'bebas') => {
//     console.log(' Forum ' + title + ' punya tag ' + tag);
// }

// createTag('tampilan rusak');


// eps 4 rest and spread
// signIn = (username, password, umur) => {
signIn = (...membee) => {
    // console.log(username + ' punya password ' + password + 'umurnya' + umur)
    console.log(membee)
}

// let data = ['john', '123' , 40]
username = 'hilman'
password = '123'
umur = '12'
// signIn(...data)
signIn(username, password, umur)











