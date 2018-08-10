// 异步代码
// 测试运行完了调用一下回调函数就行。只需要在it()中添加一个回调[2]，Mocha就知道应该等到这个回调被调用时才结束这个测试用例的运行。
const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    console.log(res);
    // throw new Error('2222');
    // expect断言库    头部是expect方法，尾部是断言方法
    // expect(res).toBe(44); // 等价于 if (res !== 44) {throw new Error(`Expected 44, but got ${res}`); }
    // expect(4,5).to.be.equal(9);
    expect(res).toBe(44).toBeA('number');
    expect(res).toNotBe('number');
});

it('should square a number', () => {
    var res = utils.square(2);
    if (res !== 4) {
        throw new Error(`Expected 4,but got ${res}`);
    }
});

// it('should expect some values',()=>{
//     // expect({name:'lx'}).toEqual({name:'lx'});
//     // expect([1,3,4]).toInclude(1);
//     expect({
//         name:'lx',
//         age:12
//     }).toInclude({
//         age:12
//     })
// });

it('should expect user', () => {
    var user = {location:'Philadelphia',age:21};
    var res = utils.setName(user,'lx andrew');
    console.log(res);
    expect(res).toInclude({
        firstName:'lx',
        lastName:'andrew'
    })
});