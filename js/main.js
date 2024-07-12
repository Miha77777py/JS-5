// 1
const btn1 = document.querySelector("#btn_1");
const select1 = document.querySelector("#select_1");

btn1.addEventListener("click", () => {
    alert(`Ваш напій: ${select1.value}`);
});

// 2
const btn2 = document.querySelector("#btn_2");
const inp1 = document.querySelector("#inp_1");

const daysOfWeek = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
    "неділя",
];

btn2.addEventListener("click", () => {
    const inp1Value = inp1.value.toLowerCase();

    if (daysOfWeek.includes(inp1Value)) {
        if (inp1Value === "субота" || inp1Value === "неділя") {
            alert("Сьогодні вихідний!✨");
        } else {
            alert("Сьогодні робочий день :(");
        }
    } else {
        alert("Такого дня тижня не існує!");
    }
});

// 3
const btn3 = document.querySelector("#btn_3");
const inp2 = document.querySelector("#inp_2");

const year = {
    "Зима❄": [1, 2, 12],
    "Весна🌸": [3, 4, 5],
    "Літо☀": [6, 7, 8],
    "Осінь🍂": [9, 10, 11],
};

btn3.addEventListener("click", () => {
    const yearValues = Object.values(year);
    const answer = yearValues.find((el) => el.includes(Number(inp2.value)));

    if (answer) {
        alert(Object.keys(year)[yearValues.indexOf(answer)]);
    } else {
        alert("Такого місяця не існує!");
    }
});

// 4
const btn4 = document.querySelector("#btn_4");
const inp3 = document.querySelector("#inp_3");

const dayOfMonth = {
    "31": [1, 3, 5, 7, 8, 10, 12],
    "30": [4, 6, 9, 11],
    "28/29": [2],
};

btn4.addEventListener("click", () => {
    const dayOfMonthValues = Object.values(dayOfMonth);
    const answer = dayOfMonthValues.find((el) =>
        el.includes(Number(inp3.value))
    );

    if (answer) {
        const days = Object.keys(dayOfMonth)[dayOfMonthValues.indexOf(answer)];

        alert(
            `У цьому місяці ${
                days
            } ${days === "31" ? "день" : "днів"}`
        );
    } else {
        alert("Такого місяця не існує!");
    }
});

// 5
const btn5 = document.querySelector("#btn_5");
const inp4 = document.querySelector("#inp_4");

btn5.addEventListener("click", () => {
    switch (inp4.value.toLowerCase()) {
        case "червоний":
            alert("Стоп🟥");
            break;
        case "жовтий":
            alert("Зачекайте🟨");
            break;
        case "зелений":
            alert("Проходьте🟩");
            break;
        default:
            alert("Неправильний колір!")
            break;
    }
});

// 6
const btn6 = document.querySelector("#btn_6");
const select2 = document.querySelector("#select_2");
const inp5 = document.querySelector("#inp_5");
const inp6 = document.querySelector("#inp_6");

btn6.addEventListener("click", () => {
    const firstNum = Number(inp5.value);
    const secondNum = Number(inp6.value);

    switch (select2.value) {
        case "+":
            alert(firstNum + secondNum);
            break;
        case "-":
            alert(firstNum - secondNum);
            break;
        case "*":
            alert(firstNum * secondNum);
            break;
        case "/":
            alert(secondNum !== 0 ? firstNum / secondNum : "Ділення на нуль!");
            break;
    }
});
