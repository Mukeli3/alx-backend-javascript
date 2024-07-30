export default function updateStudentGradeByCity(studes, city, newGrades) {
  const fStudes = studes.filter((stude) => stude.location === city);
  return fStudes.map((stude) => {
    const gradE = newGrades.find((grade) => grade.studI === stude.id);
    const grade = gradE ? gradE.grade : 'N/A';
    return {
      ...stude,
      grade,
    };
  });
}
