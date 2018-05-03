import { Julian } from './julian.class';

describe('Julian Reckoning', () => {
  const julian2100 = new Julian(2100);
  const julian1400 = new Julian(1400);

  it('Easter Sunday should be on the 18th of April in 2100', (done) => {
    expect(julian2100.easterSunday).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(julian2100.easterSunday[0]).toBe(18,
      'Easter Sunday property value should be an array.'
    );
    expect(julian2100.easterSunday[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Easter Full Moon should be on the 15th of April in 2100', (done) => {
    expect(julian2100.easterFullMoon).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(julian2100.easterFullMoon[0]).toBe(15,
      'Easter Sunday property value should be an array.'
    );
    expect(julian2100.easterFullMoon[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Dominical Letter should be DC in 2100', (done) => {
    expect(julian2100.dominicalLetter).toBe('DC',
      'Dominical Letter should be Dc.'
    );
    done();
  });

  // it('Martyrological Letter should be u in 2100', (done) => {
  //   expect(julian1400.martyrologyLetter).toBe('u',
  //     'Martyrological Letter should be u.'
  //   );
  //   done();
  // });

  it('Solar cycle should be 9 in 2100', (done) => {
    expect(julian2100.solarCycle).toBe(9,
      'Solar cycle should be 9.'
    );
    done();
  });

  it('Easter Sunday should be on the 18th of April in 1400 (Pre-1582)', (done) => {
    expect(julian1400.easterSunday).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(julian1400.easterSunday[0]).toBe(18,
      'Easter Sunday property value should be an array.'
    );
    expect(julian1400.easterSunday[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Easter Full Moon should be on the 12th of April in 1400 (Pre-1582)', (done) => {
    expect(julian1400.easterFullMoon).toBeArray(
      'Easter Sunday property value should be an array.'
    );
    expect(julian1400.easterFullMoon[0]).toBe(12,
      'Easter Sunday property value should be an array.'
    );
    expect(julian1400.easterFullMoon[1]).toBe(4,
      'Easter Sunday property value should be an array.'
    );
    done();
  });

  it('Dominical Letter should be DC in 1400', (done) => {
    expect(julian1400.dominicalLetter).toBe('DC',
      'Dominical Letter should be DC.'
    );
    done();
  });

  // it('Martyrological Letter should be u in 1400', (done) => {
  //   expect(julian1400.martyrologyLetter).toBe('u',
  //     'Martyrological Letter should be u.'
  //   );
  //   done();
  // });

  it('Solar cycle should be 9 in 1400', (done) => {
    expect(julian1400.solarCycle).toBe(9,
      'Solar cycle should be 9.'
    );
    done();
  });
});
