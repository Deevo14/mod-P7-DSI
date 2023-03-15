/**
 * Clase que representa un número primo
 */
export class PrimeNumber {
  /**
   * Atributo privado para guardar arrays de numeros primos
   */
  private items_: number[];

  /**
   * Atributo privado estatico
   */
  private static primeNumber: PrimeNumber;

  /**
   * Constructor de la clase
   * @param n numero de primos a generar
   */
  private constructor(n: number) {
    this.items_ = this.primes(n);
  }

  /**
   * Método estático para obtener una instancia de la clase
   * @param n numero de primos a generar
   * @returns instancia de la clase
   */
  public static getPrimeNumber(n: number): PrimeNumber {
    if (!PrimeNumber.primeNumber) {
      PrimeNumber.primeNumber = new PrimeNumber(n);
    }
    return PrimeNumber.primeNumber;
  }

  /**
   * Getter de items
   */
  get items(): number[] {
    return this.items_;
  }

  /**
   * Setter de items
   */
  set items(items: number[]) {
    this.items_ = items;
  }

  /**
   * Método privado para comprobar si un número es primo
   * @param n numero a comprobar si es primo
   * @returns true si es primo, false en caso contrario
   */
  private isPrime(n: number): boolean {
    let count = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }

    if (count === 2) {
      return true;
    }

    return false;
  }

  /**
   * Método privado para generar un array de n numeros primos
   * @param n numero de primos a generar
   * @returns array de numeros primos
   */
  private primes(n: number): number[] {
    let count = 0;
    let i = 1;

    const result: number[] = [];

    while (count < n) {
      if (this.isPrime(i)) {
        result.push(i);
        count++;
      }
      i++;
    }
    return result;
  }

  /**
   * Método estático para obtener los n primeros números primos
   * @param n numero de primos a generar
   * @returns array de numeros primos
   */
  static getPrimes(n: number): number[] {
    const instance = PrimeNumber.getPrimeNumber(n);
    let result: number[] = [];

    if (n <= instance.items.length) {
      for (let i = 0; i < n; i++) {
        result.push(instance.items[i]);
      }
    } else {
      result = instance.primes(n);
    }

    return result;
  }

  /**
   * Método estático para obtener los números primos que hay entre n y m
   * @param n Minimo valor del rango
   * @param m Maximo valor del rango
   * @returns array de numeros primos
   */
  static getPrimesInRange(n: number, m: number): number[] {
    const instance = PrimeNumber.getPrimeNumber(m);
    const result: number[] = [];
    for (let i = n; i <= m; i++) {
      if (instance.isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  }
}
