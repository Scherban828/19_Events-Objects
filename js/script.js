const buttons = document.querySelectorAll('.btn');
console.log(buttons);
// => {} - это вид написания ф-ии, называется линейной ф-ей
const handleclick = (event) => {
    console.log("Click");
    console.log(event.target);
    console.log(event.target.textContent);
    //stopPropagetion блокирует срабатывание обработчика события только на этом объекте , блокируя всплытие
    //event.stopPropagation();
};
//Метод перебора ForEach, подходит для перебора объектов с одинакомым классом 
buttons.forEach(button => {
    button.addEventListener('click', handleclick);
});
//Всплытие и погружение 
//В данном случае срабатывает сначала клик на кноаку, зател клик на все окно, соотвественно обрабатывпается события от глубоких к поверхностным
window.addEventListener('click', function () {
    console.log('window click');
    //В данном случае блокирует погружение
    event.stopPropagation();
}, { capture: true });

//Hosting (Поднятие)
//Поднятие - свойство JS, при котором функция срабатывает, даже если она объявлена позже
//Как в этом примере
letsGo();
function letsGo() {
    console.log("Go!");
    console.log(ab(5, 6));
}
function ab(a, b) {
    return a + b;
}
//При этом Поднятие не работает на переменные
//console.log(a);
//let a = 100;

//Методы копирования массивов
//Создаем массив
const students = ['Вася', 'Петя', 'Катя'];

//1) Метод Slice
//возвращает новый массив, содержащий копию части исходного массива
const group = students.slice(0, 2);
console.log(students);
console.log(group);
//2) Метод concat
//создает и возвращает новый массив, являющийся результатом присоединения каждого из его аргументов к массиву. Если какие-либо из аргументов concat() сами являются массивами, то присоединяются элементы этих массивов, а не сами массивы.
const group2 = [].concat(students);
console.log(group2);
//3) Метод spread - копирует каждый элемент массива в новый
const group3 = [...students];
console.log(group3);
//4) Метод Array.from()
const group4 = Array.from(students);
console.log(group4);
//Копирование объекта
const person = {
    name: 'Albert',
    age: 18
}
//1) Метод Object.assign 
const person1 = Object.assign({}, person, { age: 100, height: 180 });
console.log(person1);
console.log(person);
//2) Метод spread
const person2 = { ...person };
console.log(person2);
//С помощью этих методов нельзя копировать вложенные объекты
//Метод JSON.parse(JSON.stringify())
//Предварительно переведит все значения объекта в строку, а затем копирует и возвращает в новый объект
const max = {
    name: 'Max',
    age: 10,
    social: {
        vk: 'Maxik',
    }
}
const max3 = JSON.parse(JSON.stringify(max));
max3.social.vk = 'Maximilian';
console.log(max3);
console.log(max);