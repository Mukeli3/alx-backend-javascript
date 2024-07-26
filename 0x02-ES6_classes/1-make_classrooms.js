import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const fRm = new ClassRoom(19);
  const sRm = new ClassRoom(20);
  const tRm = new ClassRoom(34);

  return [fRm, sRm, tRm];
}
