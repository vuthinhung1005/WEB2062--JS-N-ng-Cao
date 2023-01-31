const restaurant = {
    name: 'classico',
    location: 'via anbgelo tavanti 23',
    categories: ['italian', 'pizzaria ', 'vegatarian', 'organic'],
    startermenu: ['focacia', 'bruschetta', 'garkic', 'bread'],
    mainmenu: ['pizza', ' pasta', 'risotto'],
};


const menu = [...restaurant.startermenu,...restaurant.mainmenu];
for (const item of menu)  console.log(item);
for (const [i,el] of menu.entries()) console.log(`${i+1}: ${el}`);
console.log([...menu.entries()]);



