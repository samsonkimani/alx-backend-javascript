export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const result = array.map((student) => student.id);
  return result;
}
