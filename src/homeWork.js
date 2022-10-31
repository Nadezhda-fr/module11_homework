/*Заданик 3 темы функции*/

export function repeatWord(word, count) {
    let result = "";
    if (typeof count !== "number" || count <= 0) {
        result = "Ошибка ввода данных!";
        return result
    }

    
    for (let i = 1; i <= count; i++) {
      result = result + word + i;
      if (i < count) {
        result = result + ", "
      }
    }
    return result;
  }
    
  