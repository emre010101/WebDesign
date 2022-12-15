/*Slide effect in the employment page*/
/*=======================================
I used the below website to create slide effect.
개발자 데비너스의 개발일지. (2022). Vanilla JavaScript Slider 자바스크립트 슬라이드 페이지네이션(pagination) 구현. [online] Available at: https://devinus.tistory.com/45 [Accessed 14 Dec. 2022].
========================================= */

// Claculte the width of slide
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// Create element for button(prev, next)
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// Create element for main-box to change its value
const mainBox = document.querySelectorAll(".main-box");
// Create element for the maximum number of slides
const maxSlide = mainBox.length;

// Create element for slide number
let slideNum = 1;

// Create element for pagination
const pagination = document.querySelector(".slide_pagination");

// Use function for creating list
for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

// Calculate the number of pagination items
const paginationItems = document.querySelectorAll(".slide_pagination > li");
console.log(paginationItems);

// Apply Click event to next button
nextBtn.addEventListener("click", () => {
  // If next button is clicked, slide number is increased
  slideNum++;
  // Set limitation for the maximum number of slide
  if (slideNum <= maxSlide) {
    // Calculate offset for slide movement
    const offset = slideWidth * (slideNum - 1);
    // Apply offset to left of each slide items
    mainBox.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // If slide was moved, pagination is changed
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  } else {
    slideNum--;
  }
});
// Apply Click event to prev button
prevBtn.addEventListener("click", () => {
  // If prev button is clicked, slide number is decreased
  slideNum--;
  // Set limitation for the minimum number of slide
  if (slideNum > 0) {
    // Calculate offset for slide movement
    const offset = slideWidth * (slideNum - 1);
    // Apply offset to left of each slide items
    mainBox.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // If slide was moved, activated pagination is changed
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  } else {
    slideNum++;
  }
});

// Change slideWIdth whenever window is resized
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// Implement funcion for pagination
for (let i = 0; i < maxSlide; i++) {
  // Give Click event to each pagination
  paginationItems[i].addEventListener("click", () => {
    // Change slide according to the clicked pagination item
    slideNum = i + 1;
    // Calculate offset for slide movement
    const offset = slideWidth * (slideNum - 1);
    // Apply offset to left of each slide items
    mainBox.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // If slide was moved, activated pagination is changed
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  });
}

//Jinnie's Code ends

