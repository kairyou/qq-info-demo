import { toInteger } from 'utils/format';

describe('test format', () => {
  test('toInteger', () => {
    expect(toInteger('0100')).toBe(100);
  });
});
