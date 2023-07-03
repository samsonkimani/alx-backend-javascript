export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const result = students.reduce((accumulator, current) => accumulator + current.id, initialValue);

  return result;
}
