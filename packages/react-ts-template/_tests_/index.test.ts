import add from '../src/utils/math';

describe('add', () => {
  it('test add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
