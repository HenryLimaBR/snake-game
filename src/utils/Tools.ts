export class Tools {
  public static random(i: number, f: number, hex?: false): number
  public static random(i: number, f: number, hex: true): string
  public static random(i = 0, f = 100, hex = false) {
    const rNumber = Math.floor(Math.random() * (f - i + 1) + i)
    return !hex ? rNumber : rNumber.toString(16)
  }
}