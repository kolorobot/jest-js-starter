import { randomArray } from './random-array';

const array = randomArray(3, 42, 1024);
const [one, two, three] = array;

console.log(`${one}, ${two}, ${three}`);
