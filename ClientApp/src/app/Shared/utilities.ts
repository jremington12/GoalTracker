export class Utilities {
  public static toCamelCase(phrase: string): string {
    let words = phrase.split(' ');
    words.forEach((word, index) => words[index] = word.charAt(0).toUpperCase() + word.substr(1));

    return words.join(' ');
  }
}
