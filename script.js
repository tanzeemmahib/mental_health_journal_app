fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(data => {
    document.getElementById("quote").textContent = `"${data.content}" — ${data.author}`;
  });

let selectedMood = "";

document.querySelectorAll(".mood").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedMood = btn.textContent;
    document.querySelectorAll(".mood").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const journalText = document.getElementById("journal").value;

  if (!journalText || !selectedMood) {
    alert("Please write something and pick a mood!");
    return;
  }

  alert(`Entry saved!\nMood: ${selectedMood}\nText: ${journalText}`);
});
