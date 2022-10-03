export let arraysEqual = <T>(a: T[], b: T[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;

  let aSet = new Set(a);
  let bSet = new Set(b);
  if (aSet.size !== bSet.size) return false;

  for (let x of a) if (!b.includes(x)) return false;

  return true;
};
