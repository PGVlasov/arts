const filter = () => {
  const menu = document.querySelector(".portfolio-menu");
  const items = menu.querySelectorAll("li");
  const btnAll = menu.querySelector(".all");
  const btnLovers = menu.querySelector(".lovers");
  const btnChef = menu.querySelector(".chef");
  const btnGirl = menu.querySelector(".girl");
  const btnGuy = menu.querySelector(".guy");
  const btnGrandmother = menu.querySelector(".grandmother");
  const btnGranddad = menu.querySelector(".granddad");
  const wrapper = document.querySelector(".portfolio-wrapper");
  const mrkAll = wrapper.querySelectorAll(".all");
  const mrkGirl = wrapper.querySelectorAll(".girl");
  const mrkLovers = wrapper.querySelectorAll(".lovers");
  const mrkChef = wrapper.querySelectorAll(".chef");
  const mrkGuy = wrapper.querySelectorAll(".guy");
  const no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    mrkAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  btnAll.addEventListener("click", () => {
    typeFilter(mrkAll);
  });

  btnLovers.addEventListener("click", () => {
    typeFilter(mrkLovers);
  });

  btnChef.addEventListener("click", () => {
    typeFilter(mrkChef);
  });

  btnGirl.addEventListener("click", () => {
    typeFilter(mrkGirl);
  });

  btnGuy.addEventListener("click", () => {
    typeFilter(mrkGuy);
  });

  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });

  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });

  menu.addEventListener("click", (e) => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};

export default filter;
