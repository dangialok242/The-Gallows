<h1 align="center">💀 THE GALLOWS: Death Pact</h1>

<p align="center">
  <strong>A Premium, Horror-Themed 20-Chamber Execution Campaign.</strong><br>
  <em>Will you survive the rope, or will your soul belong to The Gallows?</em>
</p>

---

## 🕷️ About The Game

**THE GALLOWS** is not your ordinary Hangman game. It is a terrifying, high-stakes psychological thriller built entirely with **Vanilla Web Technologies** (HTML, CSS, JS). Featuring a 20-level campaign, dynamic jumpscares, a custom Web Audio API synthesizer, and a dark "Blood Pact" authentication system, this game pushes browser capabilities to deliver a chilling experience.

## 🔥 Key Features

### 🩸 The Pact of Blood (Multi-User DB)
* **Executioner Sign-Up/Sign-In:** Create your dark persona. The game uses `localStorage` as a pseudo-database to save progress, points, and unlocked chambers for multiple different users on the same device.
* **Name the Victim:** You choose the name of the victim facing the gallows before every round.

### ⛓️ 20-Chamber Campaign Mode
* Play through 20 increasingly difficult levels.
* **Dynamic Point Unlocks:** Earn Blood Points (Easy: +10, Extra Hard: +30) to unlock the next chambers.
* **Dynamic Word Engine:** Words scale in difficulty based on the selected timer (15s, 30s, 60s, 90s). Failing and retrying a chamber gives you a brand-new word!

### 👹 Pure Horror UI/UX & Jumpscares
* **No External Assets:** Every ghost, skull, and jumpscare is built using Pure CSS, SVG, and DOM manipulation. 
* **Side-Scares:** Eerie entities peek from the edges of the screen on wrong guesses.
* **Screen Shake & Blood Overlays:** Physical feedback on the UI when making mistakes.
* **Perfect QWERTY Keyboard:** A beautifully aligned, fully clickable, and keyboard-responsive on-screen QWERTY layout.

### 🎵 100% Code-Generated Audio (No MP3s!)
* Powered by the **JavaScript Web Audio API** (`AudioContext`).
* Features **10 different randomized horror sounds** on wrong guesses (low rumbles, creepy bells, glitch buzzes, etc.).
* **Panic Mode:** A terrifying heartbeat sound plays during the final 5 seconds.
* **The Ultimate Jumpscare:** A devastating synthesized screech plays upon death.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structure and inline SVG drawing for the Hangman.
* **CSS3:** Advanced animations (`@keyframes`), Glassmorphism, Neon glow effects, CSS Grid & Flexbox.
* **JavaScript (ES6+):** Game logic, multi-user LocalStorage database, DOM manipulation, and procedural audio synthesis.

---

## 🚀 How to Run Locally

You don't need any local server, dependencies, or installations to play this game.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/the-gallows-death-pact.git](https://github.com/yourusername/the-gallows-death-pact.git)