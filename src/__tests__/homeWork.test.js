import { repeatWord } from "../homeWork.js";


describe("tests for repeatWord function", () => {
  it("should repeat word", () => expect(repeatWord("abc", 2)).toBe("abc1, abc2"));
  it("should repeat word", () => expect(repeatWord(2, "abc")).toBe("Ошибка ввода данных!"));
  it("should repeat word", () => expect(repeatWord("слово", 3)).toBe("слово1, слово2, слово3"));
  it("should repeat word", () => expect(repeatWord("слово", 0)).toBe("Ошибка ввода данных!"));
  it("should repeat word", () => expect(repeatWord("слово", -3)).toBe("Ошибка ввода данных!"));
});