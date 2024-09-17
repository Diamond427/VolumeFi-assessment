function difference(setA, setB) {
  return new Set([...setA].filter(element => !setB.has(element)));
}

function calculateStartEnd(paths) {
  const start_stations = paths.map(([st, ed]) => st);
  const end_stations = paths.map(([st, ed]) => ed);
  const start_set = new Set(start_stations);
  const end_set = new Set(end_stations);

  const start_only = difference(start_set, end_set);
  const end_only = difference(end_set, start_set);

  if (start_only.size !== 1 || end_only.size !== 1) {
    throw new Error("Invalid Paths")
  }

  const source = [...start_only][0];
  const destination = [...end_only][0];
  return [source, destination];
}

module.exports = {
  calculateStartEnd
}