import player from './images/playerMin.png';
import octopusImg from './images/octopusMin.png';
import scorpionImg from './images/scorpionMin.png';
import goblinImg from './images/goblinMin.png';
import pumpkinImg from './images/pumpkinMin.png';
import girlImg from './images/girlMin.png';
import mealImg from './images/mealMin.png';
import dollarImg from './images/dollarMin.png';
import fishImg from './images/fishMin.png';

export const ITEMS = {
  fish: {
    name: 'fish',
    influence: 1,
    type: 'good',
    imgWidth: 100,
    imgHeight: 38,
    img: fishImg,
  },
  dollar: {
    name: 'dollar',
    influence: 2,
    type: 'good',
    imgWidth: 100,
    imgHeight: 97,
    img: dollarImg,
  },
  meal: {
    name: 'meal',
    influence: 3,
    type: 'good',
    imgWidth: 100,
    imgHeight: 51,
    img: mealImg,
  },
  girl: {
    name: 'girl',
    influence: 4,
    type: 'good',
    imgWidth: 120,
    imgHeight: 104,
    img: girlImg,
  },
  pumpkin: {
    name: 'pumpkin',
    influence: -2,
    type: 'evil',
    imgWidth: 70,
    imgHeight: 83,
    img: pumpkinImg,
  },
  goblin: {
    name: 'goblin',
    influence: -4,
    type: 'evil',
    imgWidth: 120,
    imgHeight: 113,
    img: goblinImg,
  },
  scorpion: {
    name: 'scorpion',
    influence: -6,
    type: 'evil',
    imgWidth: 90,
    imgHeight: 103,
    img: scorpionImg,
  },
  octopus: {
    name: 'octopus',
    influence: -8,
    type: 'evil',
    imgWidth: 100,
    imgHeight: 83,
    img: octopusImg,
  },
};

export const PLAYER = {
  width: 60,
  height: 83,
  img: player,
  step: 30,
};
