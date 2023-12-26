const tabbedDay = document.querySelector(".tabbed-day");
const tabList = tabbedDay.querySelector(".ticket");
const tabButtons = tabList.querySelectorAll(".ticketDay");
const tabPanels = tabbedDay.querySelectorAll(".infoPaket > div");

tabButtons.forEach((tab, index) => {
  if (index === 0) {
  } else {
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabbedDay.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  console.log(e.target);
  e.preventDefault();
});
