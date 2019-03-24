import Team, { Character } from './js/team';

const magician = new Character('Маг', 'Magician');
const bowman = new Character('Лучник', 'Bowman');
const swardsman = new Character('Мечник', 'Swardsman');
const undead = new Character('Нежить', 'Undead');
const daemon = new Character('Демон', 'Daemon');
const zombie = new Character('Зомби', 'Zombie');
/* eslint-disable no-console */
const team = new Team();
console.log(team);
team.addAll(magician, bowman, swardsman, undead, daemon);
console.log(team);
team.toArray();
console.log(team);
team.add(undead);
console.log(team);
team.add(zombie);
console.log(team);
