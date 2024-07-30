export default function getListStudentIds(studesList) {
  if (!Array.isArray(studesList)) {
    return [];
  }
  return studesList.map(stude => stude.id);
}
