// Po załadowaniu strony wstawiamy ASCII-krowę i “dymek”
document.addEventListener("DOMContentLoaded", function() {
  // statycznie wklejony ASCII-art krowy (bez dymka)
  const asciiCow = String.raw`
                   \
                    \
                      ^__^
                      (oo)\_______
                      (__)\       )\/\
                          ||----w |
                          ||     ||
  `;

  // wiadomości do losowania
  const messages = [
    "Muu! Czytaj dalej!",
    "CZY JUZ ZROBIŁEŚ COMMIT?!",
    "MUUU AUAUAUA",
    "żaba w betoniarce?",
    "Muuuaa! MUMUMUUUU!!!",
    "Dasz Pan zaliczenie muuu??",
    "Pij mleko, będziesz wielki",
    "Rura na miasteczko",
    "Chemiczaku młody, nie lej kwasu do wody",
    "Duma Myszkowa"
  ];

  // budujemy elementy
  const cow = document.createElement("div");
  cow.id = "float-cow";
  cow.textContent = asciiCow;

  const bubble = document.createElement("div");
  bubble.id = "float-cow-bubble";
  cow.appendChild(bubble);

  document.body.appendChild(cow);

  // funkcja pokazująca losowy tekst w ASCII-dymku
  function showBubble() {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const len = msg.length;
    const top    = " " + "_".repeat(len + 2);
    const mid    = `| ${msg} |`;
    const bottom = " " + "-".repeat(len + 2);

    // łączymy dymek i krowę
    cow.textContent = [top, mid, bottom, asciiCow].join("\n");
  }

  // kliknięcie i cyklicznie
  cow.addEventListener("click", showBubble);
  setInterval(showBubble, 5000);

  // pierwsze wywołanie
  showBubble();
});
