var square = x => x * x;
console.log(square(3));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`hi. I am ${this.name}`); // 箭头函数没有this。所以是undefined
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi. I am ${this.name}`);
    }
};

user.sayHiAlt();

