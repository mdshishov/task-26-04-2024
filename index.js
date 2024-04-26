export default (coll, value, start = 0, end = coll.length) => {
  const cycleEnd = end < coll.length ? end : coll.length;
  for (let i = start; i < cycleEnd; i += 1) {
    coll[i] = value;
  }
};
