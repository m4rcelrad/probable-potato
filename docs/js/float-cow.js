// Po załadowaniu strony wstawiamy ASCII-krowę i “dymek”
document.addEventListener("DOMContentLoaded", function() {
  // statycznie wklejony ASCII-art krowy (bez dymka)
  const asciiCow = String.raw`
   \   ^__^
    \  (oo)\_______
       (__)\       )\/\
           ||----w |
           ||     ||
  `;

  // wiadomości do losowania
  const messages = [
    "Muu! Czytaj dalej!",
    "Zostaw gwiazdkę ⭐ na GitHubie!",
    "Hej, dołącz do nas!",
    "Czy już zrobiłeś fork?",
    "Muuuaa!",
    "Nie zapomnij o kubku z kawą ☕"
  ];

  // budujemy elementy
  const cow = document.createElement("div");
  cow.id = "float-cow";
  cow.textContent = asciiCow;

  const bubble = document.createElement("div");
  bubble.id = "float-cow-bubble";
  cow.appendChild(bubble);

  document.body.appendChild(cow);

  // funkcja pokazująca losowy tekst w dymku
  function showBubble() {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    bubble.textContent = msg;
    bubble.style.display = "block";
    setTimeout(() => bubble.style.display = "none", 5000);
  }

  // kliknięcie i timer
  cow.addEventListener("click", showBubble);
  setInterval(showBubble, 15000);
});
