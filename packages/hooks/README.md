# `@looped/hooks`

A library of useful react hooks

## Included Hooks

- **useDebounce**
- **useDelayed**
- **useGlobalMemo**
- **useGlobalState**
- **useIsMobile**
- **useIsSSR**
- **useLoading**
- **useInterval**
- **useMemoIf**
- **useLocalstorage**
- **useDefined**
- **useControlled**

## Installation

```sh
yarn add @looped/hooks
```

## Usage

```tsx
import { useDebounce, useDelayed, ... } from '@looped/hooks';

let Component = () => {
  let { debouncedValue, value, setValue } = useDebounce('hello', 500);

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <p>{debouncedValue}</p>
    </div>
  );
};
```
