import player from './images/playerMin.png';

export const ITEMS = {
  fish: { name: 'fish', influence: 1, type: 'good' },
  dollar: { name: 'dollar', influence: 2, type: 'good' },
  meal: { name: 'meal', influence: 3, type: 'good' },
  girl: { name: 'girl', influence: 4, type: 'good' },
  pumpkin: { name: 'pumpkin', influence: -2, type: 'evil' },
  goblin: { name: 'goblin', influence: -4, type: 'evil' },
  scorpion: { name: 'scorpion', influence: -6, type: 'evil' },
  octopus: { name: 'octopus', influence: -8, type: 'evil' },
};

export const PLAYER = {
  width: 60,
  height: 83,
  img: player,
  step: 30,
};
