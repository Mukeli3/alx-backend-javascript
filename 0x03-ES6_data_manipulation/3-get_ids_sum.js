export default function getStudentIdsSum(studes) {
  return studes.reduce((accumulator, stude) => accumulator + stude.id, 0);
}
