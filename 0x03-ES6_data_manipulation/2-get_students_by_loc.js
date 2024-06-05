export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((func) => func.location === city);
  }
  return [];
}
