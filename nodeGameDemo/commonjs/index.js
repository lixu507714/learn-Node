// 将用户输入的行为记在一个变量里面
var playerAction = process.argv[process.argv.length-1];

const game = require('./lib');

// const result = game(playerAction);

// console.log(result);
let count = 0;
process.stdin.on('data', e=>{
    // console.log(e.toString().trim());
    const playerAction = e.toString().trim();
    const result = game(playerAction);

    if(result == -1) {
        count++;
    }
    if(count == 3) {
       console.log('你太厉害了，我不玩了！');
       process.exit(); // 杀掉进程
    }
})