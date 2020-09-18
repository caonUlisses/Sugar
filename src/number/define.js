import { defineStatic, defineInstance } from '../core/number';
import * as methods from './methods';

defineStatic('range', methods.range);
defineStatic('random', methods.random);

defineInstance('abbr', methods.abbr);
defineInstance('abs', methods.abs);
defineInstance('ceil', methods.ceil);
defineInstance('clamp', methods.clamp);
defineInstance('downto', methods.downto);
defineInstance('floor', methods.floor);
defineInstance('format', methods.format);
defineInstance('isEven', methods.isEven);
defineInstance('isFinite', methods.isFinite);
defineInstance('isInteger', methods.isInteger);
defineInstance('isMultipleOf', methods.isMultipleOf);
defineInstance('isNaN', methods.isNaN);
defineInstance('isOdd', methods.isOdd);
defineInstance('isSafeInteger', methods.isSafeInteger);
defineInstance('log', methods.log);
defineInstance('pad', methods.pad);
defineInstance('pow', methods.pow);
defineInstance('round', methods.round);
defineInstance('sqrt', methods.sqrt);
defineInstance('times', methods.times);
defineInstance('toChar', methods.toChar);
defineInstance('toHex', methods.toHex);
defineInstance('toOrdinal', methods.toOrdinal);
defineInstance('trunc', methods.trunc);
defineInstance('upto', methods.upto);

defineInstance('second', methods.seconds);
defineInstance('minute', methods.minutes);
defineInstance('hour', methods.hours);
defineInstance('day', methods.days);
defineInstance('week', methods.weeks);
defineInstance('month', methods.months);
defineInstance('year', methods.years);

defineInstance('seconds', methods.seconds);
defineInstance('minutes', methods.minutes);
defineInstance('hours', methods.hours);
defineInstance('days', methods.days);
defineInstance('weeks', methods.weeks);
defineInstance('months', methods.months);
defineInstance('years', methods.years);
