import { Computus } from './computus.service';

describe('Computus', () => {

  it('should return Date object', (done) => {
    const computus = new Computus(2000);
    console.log(computus);
    expect(computus.gregorian).toBeObject(
          'Return should be of type Date'
    );
    done();
  });
});
