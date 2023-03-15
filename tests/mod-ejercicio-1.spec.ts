import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from "../src/mod-ejercicio-1";

describe("Prime Number Test", () => {
  it("Getter", () => {
    expect(PrimeNumber.getPrimeNumber(3).items).to.be.eql([2, 3, 5]);
  });
  it("Setter", () => {
    expect(PrimeNumber.getPrimeNumber(3).items = [1, 2, 3]).to.be.eql([1, 2, 3]);
  });
  it("getPrimes", () => {
    expect(PrimeNumber.getPrimes(4)).to.be.eql([2, 3, 5, 7]);
    expect(PrimeNumber.getPrimes(5)).to.be.eql([2, 3, 5, 7, 11]);
  }); 
  it("getPrimesInRange", () => {
  expect(PrimeNumber.getPrimesInRange(10, 20)).to.be.eql([11, 13, 17, 19]);
  expect(PrimeNumber.getPrimesInRange(2, 10)).to.be.eql([2, 3, 5, 7]);
  }); 
});
