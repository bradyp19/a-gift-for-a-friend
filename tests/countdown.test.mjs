import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TARGET, remaining } from '../countdown.mjs';

test('target is 8 pm Eastern on November 18, independent of viewer timezone', () => {
  assert.equal(new Date(TARGET).toISOString(), '2026-11-19T01:00:00.000Z');
});
test('splits a day, hours, minutes and seconds correctly', () => {
  assert.deepEqual(remaining(TARGET - 93784000), {days:1,hours:2,minutes:3,seconds:4,done:false});
});
test('does not celebrate before the final fractional second ends', () => {
  assert.deepEqual(remaining(TARGET - 1), {days:0,hours:0,minutes:0,seconds:1,done:false});
});
test('at and after target stays at zero', () => {
  for (const now of [TARGET, TARGET + 86400000]) assert.deepEqual(remaining(now), {days:0,hours:0,minutes:0,seconds:0,done:true});
});
