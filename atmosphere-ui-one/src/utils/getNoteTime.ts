export let note:
  | '1n'
  | '2n'
  | '4n'
  | '4t'
  | '8n'
  | '8t'
  | '16n'
  | '16t'
  | '32n'
  | '32t'
  | '64n'
  | '64t';

const step = 1 / 12;
let acc = 0;
const steps: number[] = [];
for (let i = 0; i < 12; i++) {
  steps.push(acc);
  acc += step;
}
steps.push(1);

console.log(steps);

export const getNoteTime = (num: number): typeof note => {
  if (num >= 0 && num < steps[1]) {
    return '1n';
  }
  if (num >= steps[1] && num < steps[2]) {
    return '2n';
  }
  if (num >= steps[2] && num < steps[3]) {
    return '4n';
  }
  if (num >= steps[3] && num < steps[4]) {
    return '4t';
  }
  if (num >= steps[4] && num < steps[5]) {
    return '8n';
  }
  if (num >= steps[5] && num < steps[6]) {
    return '8t';
  }
  if (num >= steps[6] && num < steps[7]) {
    return '16n';
  }
  if (num >= steps[7] && num < steps[8]) {
    return '16t';
  }
  if (num >= steps[8] && num < steps[9]) {
    return '32n';
  }
  if (num >= steps[9] && num < steps[10]) {
    return '32t';
  }
  if (num >= steps[10] && num < steps[11]) {
    return '64n';
  }
  if (num >= steps[11] && num <= 1) {
    return '64t';
  }
  return '8n';
};
