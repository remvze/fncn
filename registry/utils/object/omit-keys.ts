export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const clone = { ...obj };

  keys.forEach((key) => {
    delete clone[key];
  });

  return clone;
}
