const scrolling = (upSelector) => {
  const upElement = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElement.classList.add("animated", "fadeIn");
      upElement.classList.remove("fadeOut");
    } else {
      upElement.classList.add("fadeOut");
      upElement.classList.remove("fadeIn");
    }
  });

  const element = document.documentElement;
  const body = document.body;

  const calcScroll = () => {
    upElement.addEventListener("click", function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (this.hash !== "") {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash);
        let hashElementTop = 0;

        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);

        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1;
    let priviusScrollTop;
    let speed;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (
        priviusScrollTop === scrollTop ||
        (to > from && scrollTop >= t0) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "") + hash
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        priviusScrollTop = screenTop;
      }
    }, timeInterval);
  };
  calcScroll();
};

export default scrolling;
