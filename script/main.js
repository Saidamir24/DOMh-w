const left = document.querySelectorAll(".wrapper__left-item");

left.forEach((item) => {
  item.addEventListener("click", () => {
    const style = window.getComputedStyle(item);

    document.body.style.backgroundColor = style.backgroundColor;
  });
});

const right = document.querySelectorAll(".wrapper__right-item"),
  elements = document.querySelectorAll(".wrapper__center-item");

right.forEach((item) => {
  item.addEventListener("click", () => {
    const style = window.getComputedStyle(item);

    elements.forEach((element) => {
      element.style.backgroundColor = style.backgroundColor;
    });
  });
});
