const navEl = document.querySelector(".navbar");
// Add scrolledNavbar and remove container
console.log(navEl);
const navLogo = document.querySelector(".logo");
console.log(navLogo);
// Add scrolledLogo and Remove logo
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
// Add scrolledNavlink
const backtotopEl = document.querySelector(".backtotop");
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (window.scrollY >= 278) {
    // Show back to top BTN
    backtotopEl.style.display = "inline-block";
    // Navbar Background
    navEl.classList.add("scrolledNavbar");
    // Navbar Logo
    navLogo.classList.add("scrolledLogo");
    navLogo.classList.remove("logo");
    // Navlinks
    navLinks.forEach((element) => {
      element.classList.add("scrolledNavlink");
    });
  } else {
    // Hiding Again to Back to Top
    backtotopEl.style.display = "none";
    // Navbar Background
    navEl.classList.remove("scrolledNavbar");
    // Navbar Logo
    navLogo.classList.remove("scrolledLogo");
    navLogo.classList.add("logo");
    // Navlinks
    navLinks.forEach((element) => {
      element.classList.remove("scrolledNavlink");
    });
  }
});

// * Function to animate the counting effect Starts from here
const counters = document.querySelectorAll('.counterStyle span[id^="counter"]');
let countersStarted = false;

function startCounting(targetId, endCount) {
  let currentCount = 0;
  const counterElement = document.getElementById(targetId);
  const intervalId = setInterval(() => {
    currentCount += Math.ceil(endCount / 50);
    counterElement.innerText = currentCount;
    if (currentCount >= endCount) {
      counterElement.innerText = endCount;
      clearInterval(intervalId);
    }
  }, 100);
}

function startCounters() {
  if (!countersStarted) {
    counters.forEach((counter, index) => {
      let endCount = 0;
      switch (index) {
        case 0:
          endCount = 10; // Adjust this for the first counter
          break;
        case 1:
          endCount = 23; // Adjust this for the second counter
          break;
        case 2:
          endCount = 9; // Adjust this for the third counter
          break;
        case 3:
          endCount = 12; // Adjust this for the fourth counter
          break;
        default:
          break;
      }
      startCounting(`counter${index + 1}`, endCount);
    });
    countersStarted = true;
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      startCounters(); // Call startCounters when the section is in the viewport
      observer.disconnect();
    }
  },
  { threshold: 0.2 }
);

observer.observe(document.getElementById("counterSection"));
//Counter Animation Ends Here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Accordion JS
$(document).ready(function () {
  //toggle the component with class accordion_body
  $(".accordion_head").click(function () {
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(400);
      $(".plusminus").text("+");
    }
    if ($(this).next(".accordion_body").is(":visible")) {
      $(this).next(".accordion_body").slideUp(400);
      $(this).children(".plusminus").text("+");
    } else {
      $(this).next(".accordion_body").slideDown(400);
      $(this).children(".plusminus").text("-");
    }
  });
});
