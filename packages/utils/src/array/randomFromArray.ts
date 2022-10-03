export let randomFromArray = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];
