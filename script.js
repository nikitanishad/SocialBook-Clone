var settingmenu = document.querySelector(".setting-menu");

var darkBtn = document.getElementById("dark-btn");
var userIcon = document.querySelector(".nav-user-icon");
console.log("sr", userIcon);

function settingMenuToggle() {
  console.log("external called");
  settingmenu.classList.toggle("setting-menu-height");
}

// dark btn
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("them", "dark");
// localStorage.setItem("them");

// userIcon.onclick = function () {
//   console.log("I am called");
//   settingmenu.style.display = "block";
// };
