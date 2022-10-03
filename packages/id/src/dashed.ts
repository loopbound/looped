import { generateId } from './id';

export let generateDashedId = (parts: number) => {
  return new Array(parts)
    .fill(0)
    .map(() => generateId('', 4))
    .join('-');
};
