//  Завдання 1(файл task1.js)
// Опис завдання:
// Напишіть функцію delayedLog, яка приймає:
// message (рядок) — текст, який потрібно вивести.
// delay (число) — кількість мілісекунд, через які виводиться текст.
// Функція повинна повертати Promise, який:
// Використовує setTimeout для затримки.
// Розрішується після закінчення delay, виводячи message у консоль.
// Викличте delayedLog("Привіт, світ!", 2000) із then, щоб перевірити, що повідомлення з’явиться через 2 секунди.

function delayedLog(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

delayedLog("Привіт, світ!", 2000).then((msg) => console.log("Готово. Вивели:", msg));
