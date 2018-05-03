import { Computus } from './computus.service';

describe('Computus', () => {
  const computus = new Computus(2000);
  it('should return an object', (done) => {
    expect(computus).toBeObject(
      'Returned value should be an object.'
    );
    done();
  });
  it('should have a property named gregorian', (done) => {
    expect(computus).toHaveObject('gregorian',
      'Returned value should have a property named "gregorian"'
    );
    done();
  });
  it('should have a property named julian', (done) => {
    expect(computus).toHaveObject('julian',
      'Returned value should have a property named "julian"'
    );
    done();
  });
});
