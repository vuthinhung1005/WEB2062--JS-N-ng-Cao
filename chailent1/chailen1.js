const game = {
    team1: 'bayern munich',
    team2: 'borrussia dortmund',
    players: [
        [
            'neuer',
            'oavard',
            'martinez',
            'alaba',
            'davies',
            'kimmich',
            'goretzka',
            'coman',
            'muller',
            'gnarby'
        ],
        ['burki',
            'schulz',
            'hummels',
            'ajabji',
            'hakimi',
            'weigl',
            'witsel',
            'hazard']
    ],
    score: '4:0',
    scored: ['gnaby', 'hakimi', 'muler', 'coman'],
    date: 'nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


const [players1, players2] = game.players
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutino', 'Periscic'];

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoal = function (...players) {
    console.log(`${players.length}`)
}
printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal(...game.scored);

team1 < team2 && console.log('team 1 is more likelu to win');
team1 < team2 && console.log('team 1 is more likelu to win')
