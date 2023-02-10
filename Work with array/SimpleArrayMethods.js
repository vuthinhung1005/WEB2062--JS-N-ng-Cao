

// let arr= ['a', ' b', 'c', 'd', 'e'];
// //slice
// console.log(arr.slice(2))
// console.log(arr.slice(2,4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1,-2))
// console.log(arr.slice())
// console.log([...arr])

// //splice
// // console.log(arr.splice(2))
// arr.splice(-1)
// console.log(arr)
// arr.splice(1,2)
// console.log(arr)

// //reverse
// arr= ['a', 'b', 'c', 'd', 'e'];
// const arr2= ['j', 'i','h','g', 'f']
// console.log(arr2.reverse())
// console.log(arr2)


// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]);



// //join
// console.log(letters.join("-"));





// const arr =[23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1))

// console.log('jonas'.at(0))
// console.log('jonas'.at(-1))




// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement]  of movements.entries()) {
//     if( movement>0){
//         console.log(` Movenment ${i+1}you deposited ${movement}`);
//     }else{
//         console.log(`Movenment ${i + 1}you withdrew ${Math.round(movement)}`);
//     }
// }

// console.log('-----FOREACH-----')
// movements.forEach(function (movement,i,array){
//     if (movement > 0) {
//         console.log(`Movenment ${i + 1}you deposited ${movement}`);
//     } else {
//         console.log(`Movenment ${i + 1}you withdrew ${Math.abs(movement)}`);
//     }
// })





const currentcies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
]);


currentcies.forEach(function (value, i, map){
    console.log(`${i}:${value}`);
})

//set
const current = new Set(['USD', 'GBP', 'USD','EUR','EUR']);
console.log(current);
current.forEach(function (value, i, map){
    console.log(`${i}: ${value}`);
})