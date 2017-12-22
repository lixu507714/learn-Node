var square = x => x * x;
console.log(square(3));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`hi. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi. I am ${this.name}`);
    }
};

user.sayHiAlt(1, 2, 3);

