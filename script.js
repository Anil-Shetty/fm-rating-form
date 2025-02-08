window.onload = () => {
  const card = document.querySelector(".card");
  const form = document.querySelector("form");
  const rating = document.querySelector("[data-rating]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    rating.innerHTML = formdata.get("rating");
    card.classList.add("card--success");
  });
};
