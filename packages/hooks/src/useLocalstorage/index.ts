import { createGlobalState } from '../useGlobalState';

let keyPrefix = '[looped]';

export let setLocalStorageKeyPrefix = (prefix: string) => {
  keyPrefix = prefix;
};

export let getLocalstorageKey = (key: string) => `${keyPrefix}:${key}`;

export let readLocalstorage = (key: string) => {
  if (typeof window == 'undefined') return undefined;

  let full = getLocalstorageKey(key);
  let item = localStorage.getItem(full);
  if (!item) return item;

  return JSON.parse(item);
};

export let deleteLocalstorage = (key: string) => {
  if (typeof window == 'undefined') return;

  let full = getLocalstorageKey(key);
  localStorage.removeItem(full);
};

export let writeLocalstorage = (key: string, data: any) => {
  if (typeof window == 'undefined') return;

  let full = getLocalstorageKey(key);
  localStorage.setItem(full, JSON.stringify(data));
};

export let createLocalstorageState = <T>(key: string, defaultState: T) => {
  let internal = createGlobalState(defaultState);

  let initialData = readLocalstorage(key);

  if (initialData != null) {
    internal.setState(initialData);
  } else {
    writeLocalstorage(key, internal.getState());
  }

  let hook: any = (): [T, (v: T) => void] => {
    let [state, setState] = internal();

    let set = (v: T) => {
      setState(v);
      writeLocalstorage(key, v);
    };

    return [state, set];
  };

  hook.getState = internal.getState;
  hook.setState = (v: T) => {
    internal.setState(v);
    writeLocalstorage(key, v);
  };

  return hook as {
    (): [T, (s: T) => void];
    getState: () => T;
    setState: (v: T) => void;
  };
};
