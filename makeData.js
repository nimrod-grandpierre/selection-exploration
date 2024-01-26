import { range } from 'd3';

export function makeData(n, t) {
  const data = range(n).map((d) => ({
    r: 20 + Math.sin(d * 0.5 + t * 2) * 10,
    x: d * 60 + 50,
    y: 250 + Math.sin(d * 0.5 + t) * 200,
    fill: `rgb(${Math.sin(t) * 255}, ${Math.sin(t) * 255 - 100}, ${Math.sin(t) * 255})`
  }));
  return data;
}