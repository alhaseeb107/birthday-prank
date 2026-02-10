let currentPage = 1;
let clickCount = 0;
const letters = ["M", "O", "E", "E", "N"];

function goPage(n) {
  document.getElementById("page" + currentPage).classList.add("hidden");
  document.getElementById("page" + n).classList.remove("hidden");
  currentPage = n;
}

function giftAnswer(ans) {
  const text = document.getElementById("answerText");
  if (ans === "yes") {
    text.innerText = "لن لے لو میرا گفٹ";
  } else {
    text.innerText = "لن پر چڑھو پھر";
  }
}

function addLetter(box) {
  if (box.classList.contains("open")) return;

  box.classList.add("open");
  box.innerText = "📦";

  const letters = ["M", "O", "E", "E", "N"];

  const nameBuild = document.getElementById("nameBuild");
  nameBuild.innerText += letters[nameBuild.innerText.length];

  if (nameBuild.innerText.length === letters.length) {
    setTimeout(() => goPage(4), 1200);
  }
}
