<div align="center">

# 💀 THE GALLOWS: Death Pact

<p align="center">
  <b>A Premium, Horror-Themed 20-Chamber Execution Campaign</b><br>
  Built with HTML5, CSS3, JavaScript & Web Audio API
</p>

</div>

---

## 📌 About The Project

**THE GALLOWS: Death Pact** is not your ordinary Hangman game. It is a terrifying, high-stakes psychological thriller built entirely with **Vanilla Web Technologies** (HTML, CSS, JS). 

The system integrates a **multi-user authentication system**, **dynamic word generation based on time/difficulty**, **pure procedural audio synthesis**, **on-screen QWERTY mapping**, and **CSS-based jumpscares** into a single immersive horror dashboard.

The project demonstrates how modern web technologies can be used to simulate a complex, state-driven, and highly interactive gaming environment without requiring external assets, databases, or audio files.

---

## ✨ Key Features

| Feature                       | Description                                                           |
| ----------------------------- | --------------------------------------------------------------------- |
| 🔐 **Pact of Blood (Auth)**   | Executioner Sign In and Sign Up system using LocalStorage.            |
| 🎨 **Horror UI/UX**           | Dark-themed interface with neon blood-red aesthetics and particles.   |
| ⛓️ **20-Chamber Campaign**    | Progressively difficult levels locked behind Blood Point requirements.|
| 🔠 **Dynamic Word Engine**    | Words scale in difficulty based on the chosen timer (15s, 30s, 60s).  |
| ⌨️ **QWERTY Keyboard**        | A beautifully aligned, fully clickable on-screen QWERTY layout.       |
| 🎵 **Synthesized Audio**      | 100% Code-generated horror sounds via Web Audio API (No MP3s used).   |
| 👹 **Dynamic Jumpscares**     | Eerie entities peek from screen edges upon wrong guesses.             |
| ⏱️ **Panic Timer Mode**       | A terrifying heartbeat sound plays during the final 5 seconds.        |
| 💾 **Multi-User Storage**     | Stores users, points, and completed chambers locally in the browser.  |

---

# 🖥️ Project Screenshots

## 1️⃣ Authentication — Pact of Blood

<p align="center">
  <img src="Screenshots/Pact of Blood Authentication.png" width="780" alt="Pact of Blood Authentication">
</p>

The authentication interface where players create their 'Executioner' persona or log in to their cursed accounts.

---

## 2️⃣ Landing Page — Entrance to the Nightmare

<p align="center">
  <img src="Screenshots/Landing Page.png" width="780" alt="Landing Page">
</p>

The main entrance gateway offering options to enter the 20 chambers or flee (logout).

---

## 3️⃣ Chambers of Hell — Level Select Map

<p align="center">
  <img src="Screenshots/Chamber Map.png" width="780" alt="Chambers Map">
</p>

The interactive map showing your accumulated Blood Points, unlocked chambers, and locked skull tiles. Levels unlock incrementally based on your score.

---

## 4️⃣ Execution Setup — Awaiting Victim

<p align="center">
  <img src="Screenshots/Execution Setup.png" width="780" alt="Execution Setup">
</p>

Before the timer starts, the Executioner must manually name the victim and select the time limit (15s to 90s). The game and timer will not start until doom is embraced.

---

## 5️⃣ Live Execution — Active Gameplay

<p align="center">
  <img src="Screenshots/Active Gameplay.png" width="780" alt="Active Gameplay">
</p>

The core gameplay interface featuring perfectly aligned letter boxes, an interactive QWERTY keyboard, glowing neon timer, and the SVG hangman drawing in real-time.

---

## 6️⃣ Execution Result — The Rope Snapped

<p align="center">
  <img src="Screenshots/Lose Modal.png" width="780" alt="Lose Modal">
</p>

The terrifying jumpscare aftermath and "Executed" modal if the player fails to guess the word in time.

*(Folder Assets Overview available at: `Screenshot/Screenshot 2026-09-04 at 5.04.49 AM.png`)*

---

# 🛠️ Technologies Used

* **HTML5** — Semantic structure and inline SVG graphics mapping.
* **CSS3** — Advanced animations (`@keyframes`), Glassmorphism, Neon glow effects, Grid & Flexbox layouts.
* **JavaScript (ES6+)** — Core game engine, logic, and DOM manipulation.
* **Web Audio API** — Procedural audio synthesis for 10+ unique horror sounds, heartbeats, and jumpscares.
* **Local Storage** — Multi-user authentication, progress tracking, and score management.

---

# 🔊 Procedural Audio Engine

The project strictly avoids external `.mp3` or `.wav` files. All audio is generated in real-time using JavaScript.

### Audio Workflow
```text
🎛️ AudioContext Initialized
      ↓
❌ Player Guesses Wrong
      ↓
🎚️ Select Random Oscillator (Sine, Square, Sawtooth)
      ↓
🎛️ Modulate Frequency & Gain
      ↓
🔊 Play Unique Horror Sound (Rumble, Glitch, Bell)