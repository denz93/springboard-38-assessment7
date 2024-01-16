const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('00:00 returns midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  })
  test('12:00 returns noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  })
  test('01:00 returns one o\'clock am', () => {
    expect(timeWord('01:00')).toBe('one o\'clock am');
  })
  test('13:00 returns one o\'clock pm', () => {
    expect(timeWord('13:00')).toBe('one o\'clock pm');
  })
  test('06:01 returns six oh one am', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  })
  test('06:10 returns six ten am', () => {
    expect(timeWord('06:10')).toBe('six ten am');
  })
  test('06:18 returns six eighteen am', () => {
    expect(timeWord('06:18')).toBe('six eighteen am');
  })
  test('06:30 returns six thirty am', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  })
  test('10:34 returns ten thirty four am', () => {
    expect(timeWord('10:34')).toBe('ten thirty four am');
  })
  test('23:23 returns eleven twenty three pm', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  })
  test('12:09 returns twelve oh nine pm', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  })
});