export function getTimeLeftString(time: number): string {
  const timeRound = Math.round(time);
  const s = (timeRound % 60).toString();
  const m = Math.floor(timeRound / 60 % 60).toString();
  const h = Math.floor(timeRound / 60 / 60 % 60).toString();
  if (h === '0') {
    return `${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
  }
  return `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
}
