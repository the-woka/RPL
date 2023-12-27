const tabbedDay = document.querySelector(".tabbed-day");
const tabList = tabbedDay.querySelector(".ticket");
const tabButtons = tabList.querySelectorAll(".ticketDay");
const tabPanels = tabbedDay.querySelectorAll(".infoPaket > div");

tabList.setAttribute("role", "tablist");

tabList.querySelectorAll('li').forEach((listitem) => {
  listitem.setAttribute("role", "presentation");
})

tabButtons.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  if (index === 0) {
    tab.setAttribute("aria-selected", "true");
  } else {
    tab.setAttribute("tabindex", "-1");
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabPanels.forEach((panel) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "0");
});

tabbedDay.addEventListener("click", (e) => {
  const clickedTab = e.target.closest(".ticketDay");
  if(!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);
});

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute('href');
  const activePanel = tabbedDay.querySelector(activePanelId);

  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", false);
    button.setAttribute("tabindex", "-1");
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });
  activePanel.removeAttribute("hidden", false);
  newTab.setAttribute("aria-selected", true);
}

// Menangani setiap tombol "Beli"
// Menggabungkan kedua potongan kode
const closeButtons = document.querySelectorAll('.close-button');
const buyButtons = document.querySelectorAll('.open-button');

// Menangani setiap tombol "Beli"
buyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modalId = `modal${index + 1}`; // Membuat ID modal yang sesuai
    const modal = document.getElementById(modalId);
    
    if (modal) {
      modal.showModal(); // Tampilkan modal yang sesuai
    }
  });
});

// Menangani setiap tombol "Batal" atau "Close"
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal'); // Mendapatkan modal terdekat dari tombol yang ditekan
    
    if (modal) {
      modal.close(); // Menutup modal
    }
  });
});

