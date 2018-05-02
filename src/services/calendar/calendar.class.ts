export class Calendar {

  public static dominicalLetter = ['G', 'F', 'E', 'D', 'C', 'B', 'A', 'AG', 'GF', 'FE', 'ED', 'DC', 'CB', 'BA'];
  public static epactname = ['*(XXX)', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX'];
  public static martyrj = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u'];
  public static martyrg = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'M', 'N', 'P'];
  public static monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public static wdname = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public static yearlength = ['common', 'bissextile'];

  /**
   * Generalized modulo function
   * @param m
   * @param n
   * @returns {number}
   */
  public static gMod(m: number, n: number): number {
    return ((m % n) + n) % n;
  }

  public static yearType(year, calendarType) {
    let type = Calendar.gMod(year, 4) === 0 ? 1 : 0;
    if (calendarType === 'Gregorian') {
      if (Calendar.gMod(year, 100) === 0) {
        type = 0;
      }
      if (Calendar.gMod(year, 400) === 0) {
        type = 1;
      }
    }
    return type;
  }

  constructor() {

  }
}
