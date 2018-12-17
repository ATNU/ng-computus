import { Injectable } from '@angular/core';
import { Gregorian } from './../gregorian';
import { Julian } from './../julian';

/**
 * Computus class.
 */
export class Computus {

  public gregorian: Gregorian;
  public julian: Julian;

  constructor(year: number) {
    this.gregorian = new Gregorian(year);
    this.julian = new Julian(year);
  }
}
