// exports.name= '李旭';

// module.exports = function c (a,b) {
//   return a-b;
// }

// module.exports 会覆盖exports

module.exports = function game(playerAction) {
    var random = Math.random()*3;

    if(random < 1) {
       var computerAction = 'rock'; // 石头
    } else if(random>2) {
       var computerAction = 'scissor'; // 剪刀
    } else {
        var computerAction = 'paper'; // 布
    }
     
    console.log('我出了'+ computerAction);
    
    // 用户输入的行为做比较
    
    if(playerAction == computerAction) {
        console.log(playerAction,computerAction)
       console.log('打平局！')
       return 0;
    } else if((playerAction=='rock' && computerAction== 'scissor') || (playerAction=='scissor' && computerAction== 'paper') || (playerAction=='paper' && computerAction== 'rock')) {
        console.log(playerAction,computerAction)
        console.log('你赢了')
        return -1;
    } else {
        console.log(playerAction,computerAction)
        console.log('你输了')
        return 1;
    }
}

// 将用户输入的行为记在一个变量里面
// var playerAction = process.argv[process.argv.length-1];
// 电脑的行为

