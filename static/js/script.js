// ! Navbar

// ! writers
function Writers() {
  const wrtContainer = document.querySelector("#main-container");
  const writerContainers = document.querySelectorAll(".wrtr-container");
  const writerbios = document.querySelectorAll(".wrtr-bio");
  const writercontents = document.querySelectorAll(".wrtr-content");
  const writerctgs = document.querySelectorAll(".wrtr-ctgr");
  const wrtrBtns = document.querySelectorAll(".wrtr-button");
  const writercats = document.querySelectorAll(".wrtr-cat");

  const screenWidth = window.innerWidth;

  // if (screenWidth < 450) {
  //   wrtContainer.style.margin = "5% auto 0;";
  // }
  // //
  // else {
  //   wrtContainer.style.margin = "1% auto 0;";
  // }

  writerContainers.forEach((writercontainer) => {
    if (screenWidth <= 450) {
      writercontainer.style.height = "245px";
      writercontainer.style.width = "130px";
    }
    //
    else {
      writercontainer.style.height = "";
      writercontainer.style.width = "";
    }
  });
  writerbios.forEach((writerbio) => {
    if (screenWidth <= 450) {
      writerbio.style.width = "122px";
      writerbio.style.height = "145px";
      writerbio.style.fontSize = "7px";
      writerbio.style.padding = "5px 5px 50px 10px";
    }
    //
    else {
      writerbio.style.width = "";
      writerbio.style.height = "";
      writerbio.style.fontSize = "";
      writerbio.style.padding = "";
    }
  });
  writercontents.forEach((writercontent) => {
    if (screenWidth <= 450) {
      writercontent.style.width = "116px";
      writercontent.style.height = "58px";
      writercontent.style.fontSize = "12px";
    }
    //
    else {
      writercontent.style.width = "";
      writercontent.style.height = "";
      writercontent.style.fontSize = "";
    }
  });
  writerctgs.forEach((writerctg) => {
    if (screenWidth <= 450) {
      writerctg.style.width = "117px";
      writerctg.style.height = "58px";
      writerctg.style.fontSize = "13px";
    }
    //
    else {
      writerctg.style.width = "";
      writerctg.style.height = "";
      writerctg.style.fontSize = "";
    }
  });
  wrtrBtns.forEach((wrtrBtn) => {
    if (screenWidth <= 450) {
      wrtrBtn.style.fontSize = "9px";
    }
    //
    else {
      wrtrBtn.style.fontSize = "";
    }
  });
  writercats.forEach((writercat) => {
    if (screenWidth <= 450) {
      writercat.style.fontSize = "9px";
    }
    //
    else {
      writercat.style.fontSize = "";
    }
  });
}

window.addEventListener("DOMContentLoaded", Writers);
window.addEventListener("resize", Writers);

// ! text

const text =
  "itaplarla birlikte çıktığım sonsuz yolculukta, sizlere yol arkadaşlarımı tanıtmanın hazzını yaşıyor olacağım.";
const typingSpeed = 30;
const delayAfterChar = 30;

const typingTag = document.querySelector("#enterence-text");
typingTag.textContent = "K";
let index = 0;
let typingInterval;

function typeText() {
  if (index < text.length) {
    typingTag.textContent += text[index] + "_";
    index++;
    typingInterval = setTimeout(function () {
      clearRepeat();
    }, delayAfterChar);
  }
}

function clearRepeat() {
  typingTag.textContent = typingTag.textContent.slice(0, -1);
  clearTimeout(typingInterval);
  setTimeout(function () {
    typeText();
  }, typingSpeed);
}

typeText();
function Home() {
  const navText = document.querySelector("#nav-text");
  const brainIcon = document.querySelector("#nav-icon");
  const mainImg = document.querySelector(".main-img");
  const enterenceText = document.querySelector("#enterence-text");
  const secTex = document.querySelector(".second-text");
  const fantasyimg = document.querySelector(".wrtr-catalog-container-fantasy");

  const wrtrheights = document.querySelectorAll(".all-categories-book-height");
  const wrtrfonts = document.querySelectorAll(".all-categories-book-font");

  const footerContainer = document.querySelector(".footer-container");
  const footerSplitter = document.querySelector(".splitter");

  const screenWidth = window.innerWidth;

  if (screenWidth < 450) {
    navText.style.fontSize = "15px";
    // brainIcon.style.fontSize = "20px";
    mainImg.style.height = "320px";
    enterenceText.style.marginLeft = "1%";
    enterenceText.style.width = "77%";
    enterenceText.style.top = "-2%";
    enterenceText.style.fontSize = "20px";
    secTex.style.fontSize = "37px";
    secTex.style.marginTop = "20px";
    fantasyimg.style.marginTop = "50px";
    footerContainer.style.height = "10%";
    footerSplitter.style.margin = "20px auto";
  }
  //
  else {
    navText.style.fontSize = "";
    brainIcon.style.fontSize = "";
    mainImg.style.height = "";
    enterenceText.style.marginLeft = "";
    enterenceText.style.width = "";
    enterenceText.style.top = "";
    enterenceText.style.fontSize = "";
    secTex.style.fontSize = "";
    secTex.style.marginTop = "";
    fantasyimg.style.marginTop = "";
    footerContainer.style.height = "";
    footerSplitter.style.margin = "";
  }
  wrtrheights.forEach((wrtrheight) => {
    if (screenWidth <= 450) {
      wrtrheight.style.height = "230px";
    }
    //
    else {
      wrtrheight.style.height = "";
    }
  });
  wrtrfonts.forEach((wrtrfont) => {
    if (screenWidth <= 450) {
      wrtrfont.style.fontSize = "53px";
      wrtrfont.style.top = "12%";
    }
    //
    else {
      wrtrfont.style.fontSize = "";
      wrtrfont.style.marginTop = "";
    }
  });
}
window.addEventListener("DOMContentLoaded", Home);
window.addEventListener("resize", Home);
