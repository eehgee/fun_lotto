document.addEventListener("DOMContentLoaded", () => {
  const get = (target) => {
    return document.querySelector(target);
  };

  const getAll = (target) => {
    return document.querySelectorAll(target);
  };

  const startClick = get("#startBtn");
  const listItem = get(".list-item");

  // 각 동그라미안에 들어갈 숫자 item 만들기
  for (let i = 1; i <= 6; i++) {
    const itemBox = document.createElement("div");
    itemBox.classList.add("item");
    listItem.appendChild(itemBox);
  }

  // start를 누르기 전에는 item 숨기기
  const items = getAll(".item");
  items.forEach((item) => {
    item.style.display = "none";
  });

  // start 버튼 클릭
  startClick.addEventListener("click", () => {
    displayNum();
  });

  // start 버튼이 클릭되면 랜덤으로 숫자를 보여줌
  const displayNum = () => {

    // 길이가 45인 유사 배열 객체를 생성(각 배열의 요소는 undefined임)
    // _ (첫 번째 인수): 실제 요소 값. 여기서는 사용되지 않기 때문에 관습적으로 무시되는 변수인 _를 사용
    // i (두 번째 인수): 요소의 인덱스
    // 함수의 내용인 i + 1은 각 요소의 인덱스에 1을 더한 값을 반환
    const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

    // 랜덤으로 6자리의 숫자 설정
    function randomNum() {
      const numberMix = numbers.sort(() => Math.random() - 0.5);
      return numberMix.slice(0, 6);
    }

    // sort를 사용하여 숫자를 오름차순 정렬
    const lotteoNumbers = randomNum().sort((a, b) => a - b);

    // 6개의 숫자를 보여줌
    items.forEach((item, index) => {
      const num = lotteoNumbers[index];
      item.textContent = num;
      item.style.display = "";

      if (num <= 9) {
        item.style.background = "#f3b61b";
      } else if (num < 20) {
        item.style.background = "#cf4104";
      } else if (num < 30) {
        item.style.background = "#2076d9";
      } else if (num < 40) {
        item.style.background = "#09a43c";
      } else {
        item.style.background = "#8a8d95";
      }
    });
  };
});
