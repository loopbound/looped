import { customAlphabet } from 'nanoid';

let alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let generators: { [key: string]: () => string } = {};

let addGenerator = (length: number) => {
  if (generators[length]) return;
  generators[length] = customAlphabet(alphabet, length);
};

export let generateId = (prefix: string, length = 17) => {
  addGenerator(length);
  return (prefix || '') + generators[length]();
};
