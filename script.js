let btn = document.querySelectorAll(".exchange button");
let btn2 = document.querySelectorAll(".exchange-2 button");
let input2 = document.querySelector(".area-2 input");
let input1 = document.querySelector(".area input");
let footer1 = document.querySelector(".footer-1");
let footer2 = document.querySelector(".footer-2");
let first = "RUB";
let second = "USD";
let b;
btn[0].style.backgroundColor ="#8128f5";
btn2[1].style.backgroundColor = "#8128f5"
fetch(`https://api.exchangerate.host/latest?base=${first}`)
  .then((res) => res.json())
  .then((data) => {
    let a = data.rates;
    let arrKeys = Object.keys(a);
    arrKeys.forEach((ee, index) => {
      if (ee == `${second}`) {
        b = Object.values(a)[index];
        footer1.innerText = `1 ${first} = ${b} ${second}`;
        footer2.innerText = `1 ${second} = ${1/b} ${first}`;
      }
    })
  })

btn.forEach((element) => {
  element.addEventListener("click", (e, index) => {
let ch=e.target.parentElement.children
for (let i = 0; i < ch.length; i++) {
  ch[i].style.backgroundColor="white"
}
e.target.style.backgroundColor="#8128f5";
    first = e.target.id;
    fetch(`https://api.exchangerate.host/latest?base=${first}`)
      .then((res) => res.json())
      .then((data) => {
        let a = data.rates;
        let arrKeys = Object.keys(a);
        arrKeys.forEach((ee, index) => {
          if (ee == `${second}`) {
            b = Object.values(a)[index];
            input2.value = Number(input1.value) * b;
            footer1.innerText = `1 ${first} = ${b} ${second}`
            footer2.innerText = `1 ${second} = ${1/b} ${first}`

          }

        });
      });

  });
});

btn2.forEach((element2) => {
  element2.addEventListener("click", (e) => {
    let ch=e.target.parentElement.children
for (let i = 0; i < ch.length; i++) {
  ch[i].style.backgroundColor="white"
}
e.target.style.backgroundColor="#8128f5";

    second = e.target.id;
    fetch(`https://api.exchangerate.host/latest?base=${first}`)
      .then((res) => res.json())
      .then((data) => {
        let a = data.rates;
        let arrKeys = Object.keys(a);
        arrKeys.forEach((ee, index) => {
          if (ee == `${second}`) {
            b = Object.values(a)[index];
            input2.value = Number(input1.value) * b;
            footer1.innerText = `1 ${first} = ${b} ${second}`
            footer2.innerText = `1 ${second} = ${1/b} ${first}`

          }
        });
      });
  });
});

input1.addEventListener('keyup', () => {
  fetch(`https://api.exchangerate.host/latest?base=${first}`)
    .then((res) => res.json())
    .then((data) => {
      let a = data.rates;
      let arrKeys = Object.keys(a);
      arrKeys.forEach((ee, index) => {
        if (ee == `${second}`) {
          b = Object.values(a)[index];
          input2.value = Number(input1.value) * b;
        }
      });
    });
})