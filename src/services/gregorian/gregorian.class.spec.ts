import { Gregorian } from './gregorian.class';

describe('Gregorian Reckoning', () => {

  const gregorian2100 = new Gregorian(2100);
  const gregorian1400 = new Gregorian(1400);

  it('Easter Sunday should be on the 28th of March in 2100', (done) => {
    expect(gregorian2100.easterSunday).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian2100.easterSunday[0]).toBe(28,
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian2100.easterSunday[1]).toBe(3,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Easter Full Moon should be on the 25th of March in 2100', (done) => {
    expect(gregorian2100.easterFullMoon).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian2100.easterFullMoon[0]).toBe(25,
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian2100.easterFullMoon[1]).toBe(3,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Dominical Letter should be C in 2100', (done) => {
    expect(gregorian2100.dominicalLetter).toBe('C',
      'Dominical Letter should be C.'
    );
    done();
  });

  // it('Martyrological Letter should be u in 2100', (done) => {
  //   expect(gregorian2100.martyrologyLetter).toBe('u',
  //     'Martyrological Letter should be u.'
  //   );
  //   done();
  // });

  it('Solar cycle should be 9 in 2100', (done) => {
    expect(gregorian2100.solarCycle).toBe(9,
      'Solar cycle should be 9.'
    );
    done();
  });

  it('Easter Sunday should be on the 20th of April in 1400 (Pre-1582)', (done) => {
    expect(gregorian1400.easterSunday).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian1400.easterSunday[0]).toBe(20,
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian1400.easterSunday[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Easter Full Moon should be on the 17th of April in 1400 (Pre-1582)', (done) => {
    expect(gregorian1400.easterFullMoon).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian1400.easterFullMoon[0]).toBe(17,
      'Easter Sunday property value should be an array.'
    );
    expect(gregorian1400.easterFullMoon[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Dominical Letter should be E in 1400', (done) => {
    expect(gregorian1400.dominicalLetter).toBe('E',
      'Dominical Letter should be E.'
    );
    done();
  });

  // it('Martyrological Letter should be u in 1400', (done) => {
  //   expect(gregorian1400.martyrologyLetter).toBe('u',
  //     'Martyrological Letter should be u.'
  //   );
  //   done();
  // });

  it('Solar cycle should be 9 in 1400', (done) => {
    expect(gregorian1400.solarCycle).toBe(9,
      'Solar cycle should be 9.'
    );
    done();
  });
});
