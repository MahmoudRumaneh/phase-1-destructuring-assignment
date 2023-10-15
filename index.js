const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit',
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy',
};

// Strings

const fourAnimals = 'cow horse sheep pig chicken';
const [, bessie, , dolly, babe, little] = fourAnimals.split(' ');

const threeAnimals = 'cow sheep pig';
const [blackAndWhite, , black, , pink] = threeAnimals.split(' ');

// Arrays

const [, , , , , , indg] = colors;

// Objects

const {
  muppetName,
  color,
  song,
  job,
  partner,
  nestedMuppet: {
    album: { theMuppetMovie: { song2, song4 } },
  },
} = { ...muppet, ...nestedMuppet };

module.exports = {
  moo,
  neigh,
  baa,
  oink,
  cluck,
  bessie,
  dolly,
  babe,
  little,
  blackAndWhite,
  black,
  pink,
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
  muppetName,
  color,
  song,
  job,
  partner,
  song2,
  song4,
};
