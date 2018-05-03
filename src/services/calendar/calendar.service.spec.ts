import { Calendar } from './calendar.class';

describe('Calendar gMod', () => {
  it('4 Mod 3 should be 1', (done) => {
    expect(Calendar.gMod(4, 3)).toBe(1, 'Returned value should equal 2'
    );
    done();
  });

  it('15 Mod 6 should be 3', (done) => {
    expect(Calendar.gMod(15, 6)).toBe(3, 'Returned value should equal 2'
    );
    done();
  });

  it('10 Mod 2 should be 0', (done) => {
    expect(Calendar.gMod(10, 2)).toBe(0, 'Returned value should equal 2'
    );
    done();
  });
});

describe('Calendar yearType', () => {
  it('1500 should not be a Gregorian leap year', (done) => {
    expect(Calendar.yearType(1500, 'Gregorian')).toBe(0, '2000 should not be a Gregorian leap year'
    );
    done();
  });

  it('1600 should be a Gregorian leap year', (done) => {
    expect(Calendar.yearType(1600, 'Gregorian')).toBe(1, '2000 should be a Gregorian leap year'
    );
    done();
  });

  it('2300 should not be a Gregorian leap year', (done) => {
    expect(Calendar.yearType(2300, 'Gregorian')).toBe(0, '2000 should not be a Gregorian leap year'
    );
    done();
  });

  it('2400 should be a Gregorian leap year', (done) => {
    expect(Calendar.yearType(2400, 'Gregorian')).toBe(1, '2000 should be a Gregorian leap year'
    );
    done();
  });
});

describe('Calendar yearType', () => {
  it('1500 should not be a Julian leap year', (done) => {
    expect(Calendar.yearType(1500, 'Julian')).toBe(0, '2000 should not be a Julian leap year'
    );
    done();
  });

  it('1600 should be a Julian leap year', (done) => {
    expect(Calendar.yearType(1600, 'Julian')).toBe(1, '2000 should be a Julian leap year'
    );
    done();
  });

  it('2300 should not be a Julian leap year', (done) => {
    expect(Calendar.yearType(2300, 'Julian')).toBe(0, '2000 should not be a Julian leap year'
    );
    done();
  });

  it('2400 should be a Julian leap year', (done) => {
    expect(Calendar.yearType(2400, 'Julian')).toBe(1, '2000 should be a Julian leap year'
    );
    done();
  });
});
