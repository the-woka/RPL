const navbar = document.querySelector(".navbar");

document.querySelector("#ham-menu").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

const searchForm = document.querySelector(".search-form");

document.querySelector(".search").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const choice = dropdown.querySelector(".option");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    choice.classList.toggle("option-open");
  });

  window.onscroll = () => {
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    choice.classList.remove("option-open");
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      choice.classList.remove("option-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
