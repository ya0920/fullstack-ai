function game(playerAction){
    const arr = ['rock', 'paper', 'scissors']  //render生成0-1
    const index = Math.floor(Math.random() * 3)
    const computerAction = arr[index]

    console.log(`电脑出：${computerAction}`);

    if (computerAction ==playerAction) {
        console.log('平局');
        return 0
    }
    else if ((playerAction == 'rock' && computerAction == 'scissors') ||
            (playerAction == 'scissors' && computerAction == 'paper') ||
            (playerAction == 'paper' && computerAction == 'rock')) {
        console.log('你赢了');
        return 1;
    }
    else {
        console.log('你输了');
        return -1;
    }
}

module.exports = {
    game
}