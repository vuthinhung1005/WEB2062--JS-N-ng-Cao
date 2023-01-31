'use strict';
const restaurant = {
    name: 'classico',
    location: 'via anbgelo tavanti 23',
    categories: ['italian', 'pizzaria ', 'vegatarian', 'organic'],
    startermenu: ['focacia', 'bruschetta', 'garkic', 'bread'],
    mainmenu: ['pizza', ' pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 23,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.startermenu[starterIndex], this.mainmenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
        console.log(`${this.categories[starterIndex]} and ${this.mainmenu[mainIndex]} to ${address} to ${time}`);
    },
};
// const days=['mon','tue','wed','thu','fri','sat'];
// for(const day of days){
//     console.log(day);
//     const open= restaurant.openingHours[day]?.open || 'close';
//     console.log(`on ${day},we open at ${open}`)
// }
// if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours?.mon?.open);


//methods
// console.log (restaurant.order?.(0,1)?? 'method does not exit')
// console.log(restaurant.orderRisotto?.(0,1) ?? 'method does not exit')
// array
// const users = [
//     {name: 'quan', email:'quan@gmail.com'}
// ];
// const users = [];
// console.log (users[0]?.name ?? 'user array empty');

// if(users.length>0) console.log(users[0].name);
// else console.log('user array empty')



//property Name
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
let openStr=`we are open on ${properties.length}day:`;
for (const day of Object.keys(restaurant.openingHours)) {
    openStr+= `${day},`;
}console.log (openStr);


//property values
const values = Object.keys(restaurant.openingHours);
console.log(values);

//entire object
const entries = Object.entries(restaurant.openingHours);


for (const [day, {open,close}] of entries){
    console.log(`on ${day} we open at ${open} and close ${close}`);
}