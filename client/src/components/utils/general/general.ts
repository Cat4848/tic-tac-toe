export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const buildBoard = (size: number) => {
  return Array.from({ length: size }, () => {
    const row = Array(size).fill(undefined);
    return row;
  });
};
