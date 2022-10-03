import { useControlled } from '../useControlled';

export let useDefined = <T>(value: T | null | undefined) =>
  useControlled(value)[0];
