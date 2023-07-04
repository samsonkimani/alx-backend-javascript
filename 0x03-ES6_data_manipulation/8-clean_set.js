export default function cleanSet(set, startString) {
  const array = [];
  if (startString.length === 0) {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString) && startString != null) {
      const newValue = item.substring(startString.length);
      array.push(newValue);
    }
  }
  return array.join('-');
}
