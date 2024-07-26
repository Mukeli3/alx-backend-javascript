import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const f_rm = new ClassRoom(19);
  const s_rm = new ClassRoom(20);
  const t_rm = new ClassRoom(34);

  return [f_rm, s_rm, t_rm];
}
