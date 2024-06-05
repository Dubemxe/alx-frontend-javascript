export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudents, currentStudent) => prevStudents.id || prevStudents + currentStudent.id,
      0,
    );
  }
  return 0;
}
