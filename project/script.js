const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {}
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  music.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
});

document.getElementById("title").addEventListener("click", () => {
  const newT = prompt("Change the main message:", document.getElementById("title").textContent);
  if (newT !== null) document.getElementById("title").textContent = newT;
});

playBtn.addEventListener("keyup", (e) => {
  if (e.key === "Enter") playBtn.click();
});
