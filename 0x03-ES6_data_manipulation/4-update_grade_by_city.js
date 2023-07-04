export default function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students) || !Array.isArray(grades)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrades = grades.find((grade) => grade.studentId === student.id);
      const newGrade = newGrades ? newGrades.grade : 'N/A';
      return { ...student, grade: newGrade };
    });
}
