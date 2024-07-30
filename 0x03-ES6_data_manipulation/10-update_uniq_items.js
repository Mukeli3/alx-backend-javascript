export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [item, quant] of map) {
    if (quant === 1) {
      map.set(item, 100);
    }
  }
  return map;
}
