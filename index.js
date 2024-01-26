import { select, range } from 'd3';
import { vizData } from './vizData';
import { makeData } from './makeData';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let t = 0;
setInterval(() => {
  const n = 15;
  const data = makeData(n, t);
  svg.call(vizData, data);
  // line 17 function call is the same as
  // vizData(svg, data);
  // just in the D3 invocation pattern
  t = t + 0.025;
}, 1000 / 60);
