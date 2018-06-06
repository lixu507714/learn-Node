// 异步代码
// 测试运行完了调用一下回调函数就行。只需要在it()中添加一个回调[2]，Mocha就知道应该等到这个回调被调用时才结束这个测试用例的运行。
const utils = require('./utils');

it('should add two numbers',()=> {
    var res = utils.add(33,11);
    throw  new Error('2222');
});