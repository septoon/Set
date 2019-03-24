import Team, { Character } from '../src/js/team';

test('character constructor', () => {
  const received = new Character('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник', type: 'Bowman', health: 20, level: 1,
  };

  expect(received).toEqual(expected);
});

test('without add character', () => {
  const received = new Team();

  const expected = { setContainer: new Set([]) };

  expect(received).toEqual(expected);
});

test('team addAll', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');

  const received = new Team();
  received.addAll(magician, bowman, swardsman);

  const expected = {
    setContainer: new Set([
      {
        name: 'Маг', type: 'Magician', health: 20, level: 1,
      },
      {
        name: 'Лучник', type: 'Bowman', health: 20, level: 1,
      },
      {
        name: 'Мечник', type: 'Swardsman', health: 20, level: 1,
      },
    ]),
  };

  expect(received).toEqual(expected);
});

test('team add 1 character', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');
  const undead = new Character('Нежить', 'Undead');

  const received = new Team();
  received.addAll(magician, bowman, swardsman);
  received.add(undead);

  const expected = {
    setContainer: new Set([
      {
        name: 'Маг', type: 'Magician', health: 20, level: 1,
      },
      {
        name: 'Лучник', type: 'Bowman', health: 20, level: 1,
      },
      {
        name: 'Мечник', type: 'Swardsman', health: 20, level: 1,
      },
      {
        name: 'Нежить', type: 'Undead', health: 20, level: 1,
      },
    ]),
  };

  expect(received).toEqual(expected);
});

test('Characters toArray', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');
  const team = new Team();

  team.addAll(magician, bowman, swardsman);

  const expected = [magician, bowman, swardsman];
  const received = team.toArray();

  expect(received).toEqual(expected);
});

test('team add to many characters', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');
  const undead = new Character('Нежить', 'Undead');
  const daemon = new Character('Демон', 'Daemon');
  const zombie = new Character('Зомби', 'Zombie');

  const received = new Team();
  received.addAll(magician, bowman, swardsman, undead);
  received.add(daemon);

  const expected = () => received.add(zombie);

  expect(expected).toThrow();
});

test('team addAll to many characters', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');
  const undead = new Character('Нежить', 'Undead');
  const daemon = new Character('Демон', 'Daemon');
  const zombie = new Character('Зомби', 'Zombie');

  const received = new Team();

  const expected = () => received.addAll(magician, bowman, swardsman, undead, daemon, zombie);

  expect(expected).toThrow();
});

test('team addAll same characters', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');

  const received = new Team();

  const expected = () => received.addAll(magician, bowman, swardsman, bowman);

  expect(expected).toThrow();
});

test('team add 1 same character', () => {
  const magician = new Character('Маг', 'Magician');
  const bowman = new Character('Лучник', 'Bowman');
  const swardsman = new Character('Мечник', 'Swardsman');

  const received = new Team();
  received.addAll(magician, bowman, swardsman);

  const expected = () => received.add(bowman);

  expect(expected).toThrow();
});
