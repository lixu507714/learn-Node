const expect = require('expect');
const rewire = require('rewire'); // 测试

var app = rewire('./app');

describe('App', () => {

    var db = {
      saveUser:expect.createSpy()
    };

    app.__set__('db',db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('lx', 24);
        expect(spy).toHaveBeenCalledWith('lx',24);
    });

    it('should call saveUser with user object',()=>{
       var email = 'baidu.com';
       var password = '111';
       app.handleSignup(email,password);
       expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
});