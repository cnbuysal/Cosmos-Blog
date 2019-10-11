//hamburger menu toggle function
let getNav = document.getElementById("nav-id");
let hamIcon = document.getElementById("hamIcon");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let getDropDown = document.querySelector(".menu-sub");
let getChevronIcon = document.querySelector(".chevron");
let getPlanetsLink = document.querySelector("#planets");

function toggleNav() {
  getNav.classList.toggle("show");
  line1.classList.toggle("line1");
  line2.classList.toggle("line2");
  line3.classList.toggle("line3");
}

/*for closing the menu when clicking outside of the menu box*/

document.addEventListener("click", function(event) {
  let isClickInside = hamIcon.contains(event.target);
  let isClickInside2 = getNav.contains(event.target);

  if (!isClickInside && !isClickInside2) {
    getNav.classList.remove("show");
    line1.classList.remove("line1");
    line2.classList.remove("line2");
    line3.classList.remove("line3");
  }
});

//sub-menu toggle function

function toggleDrop() {
  getDropDown.classList.toggle("sub-show");
  getChevronIcon.classList.toggle("upper-chevron");
}

/*for closing the sub-menu when clicking outside of the menu box*/

document.addEventListener("click", function(event) {
  let isClickInside3 = getDropDown.contains(event.target);
  let isClickInside4 = getChevronIcon.contains(event.target);
  let isClickInside5 = getPlanetsLink.contains(event.target);

  if (!isClickInside3 && !isClickInside4 && !isClickInside5) {
    getDropDown.classList.remove("sub-show");
    getChevronIcon.classList.remove("upper-chevron");
  }
});

/*Pagination buttons active status*/

let pagination = document.getElementById("pagination");
let pgs = document.getElementsByClassName("pgs");
for (let i = 0; i < pgs.length; i++) {
  pgs[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
