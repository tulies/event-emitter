export default class LibraryClass {
  public getArr (arr: number[]) {
    return Array.from(new Set([1, 4, 2, 3, 4]))
  }
}
