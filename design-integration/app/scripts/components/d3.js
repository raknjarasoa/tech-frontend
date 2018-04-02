import { select, pie, arc, interpolate, scaleOrdinal } from 'd3';

let instance = null;

const width = 385;
const height = 220;
const radius = Math.min(width, height) / 2;

class D3Impl {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  initChart() {

  }
}

const Instance = new D3Impl();

Object.freeze(Instance);

export default Instance;

const svg = select('#chart')
  .append('svg')
  .append('g');

svg.append('g')
  .attr('class', 'slices');
svg.append('g')
  .attr('class', 'labels');
svg.append('g')
  .attr('class', 'lines');

const _pie = pie()
  .sort(null)
  .value(d => d.value);

const innerArc = arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.4);

const outerArc = arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9);

svg.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

const key = d => d.data.label;

const midAngle = d => d.startAngle + (d.endAngle - d.startAngle) / 2;

const color = scaleOrdinal()
  .domain(['Lorem ipsum', 'dolor sit', 'amet', 'consectetur', 'adipisicing', 'elit'])
  .range(['#2ecc71', '#e67e22', '#e74c3c', '#9b59b6', '#2980b9', '#262524']);

function randomData() {
  const labels = color.domain();
  return labels.map((label) => {
    return {
      label: label,
      value: Math.random()
    };
  });
}

change(randomData());

select('.randomize')
  .on('click', () => {
    change(randomData());
  });

function change(data) {
  const slice = svg.select('.slices').selectAll('path.slice')
    .data(_pie(data), key);

  slice.enter()
    .insert('path')
    .style('fill', d => {
      return color(d.data.label);
    })
    .attr('class', 'slice')
    .transition().duration(1000)
    .attrTween('d', function (d) {
      this._current = this._current || d;
      const _interpolate = interpolate(this._current, d);
      this._current = _interpolate(0);

      return t => innerArc(_interpolate(t));
    });

  slice.exit().remove();

  const text = svg.select('.labels').selectAll('text')
    .data(_pie(data), key);

  text.enter()
    .append('text')
    .attr('dy', '.35em')
    .attr('fill', '#2980b9')
    .text(d => d.data.label)
    .transition().duration(1000)
    .attrTween('transform', function (d) {
      this._current = this._current || d;
      const _interpolate = interpolate(this._current, d);
      this._current = _interpolate(0);
      return (t) => {
        const d2 = _interpolate(t);
        const pos = outerArc.centroid(d2);

        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      };
    })
    .styleTween('text-anchor', function (d) {
      this._current = this._current || d;
      const _interpolate = interpolate(this._current, d);
      this._current = _interpolate(0);
      return t => {
        const d2 = _interpolate(t);

        return midAngle(d2) < Math.PI ? 'start' : 'end';
      };
    });

  text.exit().remove();

  const polyline = svg.select('.lines')
    .selectAll('polyline')
    .data(_pie(data), key);

  polyline.enter()
    .append('polyline')
    .transition().duration(1000)
    .attrTween('points', function (d) {
      this._current = this._current || d;
      const _interpolate = interpolate(this._current, d);
      this._current = _interpolate(0);
      return (t) => {
        const d2 = _interpolate(t);
        const pos = outerArc.centroid(d2);

        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [innerArc.centroid(d2), outerArc.centroid(d2), pos];
      };
    });

  polyline.exit().remove();
};
