export let getArrayMap = <T extends {}>(arr: T[], key: string = 'id') => {
  let obj: { [key: string]: T } = {};

  for (let item of arr) {
    if (typeof item != 'object' || typeof (item as any)[key] == 'undefined') {
      throw new Error('getArrayMap: invalid array');
    }

    obj[(item as any)[key]] = item;
  }

  return obj;
};
