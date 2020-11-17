let tabs = document.querySelectorAll(".board1_tabs ul li");
let today = document.querySelector(".today");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let items = document.querySelectorAll(".board1_item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    let currentdetail = tab.getAttribute("data-li");
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    items.forEach(function (item) {
      item.style.display = "none";
    });

    if (currentdetail == "today") {
      today.style.display = "block";
    } else if (currentdetail == "month") {
      month.style.display = "block";
    } else if (currentdetail == "year") {
      year.style.display = "block";
    }
  });
});
