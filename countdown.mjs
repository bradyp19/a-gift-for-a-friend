export const TARGET = Date.parse('2026-11-18T20:00:00-05:00');

export function remaining(now = Date.now()) {
  const total = Math.max(0, Math.ceil((TARGET - now) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor(total / 3600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    done: now >= TARGET,
  };
}
