/* eslint-disable no-plusplus */
export default function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let max = 0;
  let cont = 0;
  candles.forEach((element) => {
    if (element > max) {
      max = element;
      cont = 1;
    } else if (element === max) {
      cont++;
    }
  });
  return cont;
}
