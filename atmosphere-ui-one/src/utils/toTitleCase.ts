export const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};
