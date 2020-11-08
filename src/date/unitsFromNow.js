import { unitAfter } from './util/distance';

/**
 * Returns either a date or a number that represents the offset from the current
 *   date.
 *
 * @extra This method uses native `set` methods under the hood. If the target
 *   date falls on a day that does not exist (i.e. February 31), the date will
 *   be shifted to the last day of the month. Similarly, in rare cases a date
 *   may shift when landing on a DST transition, for example March 8th 2:00am
 *   in northern hemisphere timezones that follow DST. Be careful when using
 *   these methods if you need exact precision.
 *
 *   Singular methods are also provided as a readable alias when using
 *   chainables.
 *
 * @param {number|Date} val - Either a number in the relevant unit or a date. If
 *   a number is passed, a date representing a point in time that many units
 *   from now will be returned. If a date is passed, a number representing the
 *   offset in the relevant unit will be returned.
 *
 * @returns {number|Date}
 *
 * @example
 *
 *   (5).secondsFromNow() -> current date + 5 seconds
 *   (5).daysFromNow() -> current date + 5 days
 *   new Date(2020, 0).monthsFromNow() -> number of months from the current date
 *
 * @method secondsFromNow
 * @method minutesFromNow
 * @method hoursFromNow
 * @method daysFromNow
 * @method weeksFromNow
 * @method monthsFromNow
 * @method yearsFromNow
 **/
export function yearsFromNow(val) {
  return unitAfter('year', val);
}

export function monthsFromNow(val) {
  return unitAfter('month', val);
}

export function weeksFromNow(val) {
  return unitAfter('week', val);
}

export function daysFromNow(val) {
  return unitAfter('day', val);
}

export function hoursFromNow(val) {
  return unitAfter('hour', val);
}

export function minutesFromNow(val) {
  return unitAfter('minute', val);
}

export function secondsFromNow(val) {
  return unitAfter('second', val);
}

export function millisecondsFromNow(val) {
  return unitAfter('millisecond', val);
}
