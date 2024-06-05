export default function getListStudentIds(myArr) {
  if (myArr instanceof Array) {
    return myArr.map((student) => student.id);
  }
  return [];
}
