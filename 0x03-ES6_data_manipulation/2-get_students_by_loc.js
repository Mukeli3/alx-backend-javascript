export default function getStudentsByLocation(studes, city) {
  return studes.filter((stude) => stude.location === city);
}
