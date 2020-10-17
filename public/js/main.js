window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0); // to display top of web page on load/reload.
});

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".menu");

navToggleBtn.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links"); // useful in the case of static css data, but what if we want to add/remove links dynamically?
  // We need to toggle the height also (css) dynamically;
  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navBar = document.getElementById("nav");
const topBtn = document.querySelector(".top-link");
const banner = document.querySelector(".banner");
const navBarHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.
  if (window.pageYOffset > navBarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (window.pageYOffset > banner.getBoundingClientRect().height) {
    // to make top button visible
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link"); // select links

for (let link of scrollLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default behaviour => of CSS smooth scrolling [which has issues]
    const id = link.getAttribute("href").slice(1); //can use e.currentTarget instead of link; use slice() to chop of "#" in the returned string
    const element = document.getElementById(id);
    const fixedNav = navBar.classList.contains("fixed-nav");
    const innerNavBarHeight = navBar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    // offsetTop - A Number, representing the top position of the element, in pixels
    let pos = element.offsetTop - innerNavBarHeight;
    if (!fixedNav) {
      pos -= innerNavBarHeight;
    }
    if (innerNavBarHeight > navBarHeight) {
      pos += linksContainerHeight;
    }
    window.scrollTo({
      left: 0,
      top: pos,
    });
    linksContainer.style.height = 0;
  });
}
const form = document.getElementById('emailform');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
})