// 1. Сделайте функцию, которая считает и выводит количество своих вызовов.

const counter = () => {
  let count = 0;
  const task1_result = document.querySelector(".task1_result");

  return function () {
    task1_result.innerHTML += `<p>Function was called ${++count} times</p>`;
  };
};

const countCalls = counter();

countCalls();
countCalls();
countCalls();
countCalls();

// ================================================================================
// 2.Даны кнопки. Привяжите к каждой кнопке событие по клику,
// которое будет считать количество нажатий по кнопке и выводить его в текст кнопки.
// Количество нажатий для каждой кнопки должно хранится в замыкании.

const increment = (button) => {
  let counter = 0;
  return function () {
    ++counter;
    button.innerText = `Clicks: ${counter}`;
  };
};

const button1 = document.querySelector('[data-target="button1"]');
const button2 = document.querySelector('[data-target="button2"]');

button1.addEventListener("click", increment(button1));
button2.addEventListener("click", increment(button2));

// ================================================================================
// 3.Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании должен хранится массив чисел,
// которые уже были сгенерированы функцией.

const randomizer = () => {
  let array = [];

  return function () {
    const result = document.querySelector(".result");
    while (array.length !== 100) {
      let num = randomInteger(1, 100);
      if (!array.includes(num)) {
        array.push(num);
      }
    }
    result.innerHTML = array.join(", ");
  };
};

const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const buttonRandom = document.querySelector('[data-target="button_random"]');
buttonRandom.addEventListener("click", randomizer());
// ================================================================================
