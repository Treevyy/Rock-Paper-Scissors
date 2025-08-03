const playGame = function() {
    const stats = {
        wins: 0,
        ties: 0,
        losses: 0,
        count: {
            rock: 0,
            paper: 0,
            scissors: 0,
        }
    }

    const options = ['R', 'P', 'S'];

    let keepPlaying = true;

    while(keepPlaying) {
        let userChoice = window.prompt('Enter R, P, or S:')

        if (!userChoice) {
            return;
        }

        userChoice = userChoice.toUpperCase();
        if(!options.includes(userChoice))  {
            window.alert('Please enter a valid choice.')
        } else {
            switch(userChoice){
                case 'R':
                    stats.count.rock++;
                    break;
                case 'P':
                    stats.count.paper++;
                    break;
                case 'S':
                    stats.count.scissors++;
                    break;
            }
        }
}

playGame();