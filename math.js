// Math.pow() পাওয়ার বের করার জন্য 


const result = Math.pow(2, 3);
// console.log(result)


const resul2 = Math.pow(5, 3);
// console.log(resul2)



// Math.abs()  
const man1 = 25;
const man2 = 35;
const gap = Math.abs(man1 - man2);   // হিসাবের মধ্যে + , - ঝামেলা না করার জন্য।
// console.log(gap);

if(gap < 5){
    // console.log('You guys can be friends');
}
else{
    // console.log('You guys stay apart');
}


// MAth.round

// const number = 2.4999;
// const fullNumber = Math.round(number);
// console.log(fullNumber)

const number2 = 2.589;
const fullNumber = Math.round(number2);       // দশমিকের পর 5 বা এর বেশী থাকলে দশমিকের আগে 1 বাড়বে।
// console.log(fullNumber)


// Math.ceil

const number3 = Math.ceil(4.12345);          // number কে উপরে উঠানোর জন্য।
// console.log(number3)

// Math.floor

const number4 = Math.floor(4.52345);        //  number কে নিচে নামানোর জন্য।
// console.log(number4)


// random 

// console.log(Math.random());             // হুদাই randomly নাম্বার দেয়  // 0.27121183273889304

for(let i = 0; i < 20; i ++){
    const random = Math.round(Math.random() *6);  // random numbar er for loop
    console.log(random)
}
