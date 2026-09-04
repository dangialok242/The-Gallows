// ==========================================
// 1. FULLSCREEN & SMART TRAP LOGIC
// ==========================================
function goFullscreen() {
    try {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(e => {});
        }
    } catch(e) {}
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isLevelStarted) {
        document.getElementById('coward-overlay').classList.remove('hidden');
    }
});

// Bug-Free Event Binder (Uses direct onclick assignment)
function bindClick(id, handler) {
    const el = document.getElementById(id);
    if (el) el.onclick = handler;
}

bindClick('return-to-hell-btn', () => {
    goFullscreen();
    document.getElementById('coward-overlay').classList.add('hidden');
});

function showScaryToast(msg) {
    const toast = document.getElementById('scary-toast');
    toast.innerText = msg;
    toast.classList.remove('hidden');
    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3000);
}

// ==========================================
// 2. DICTIONARY (EASY 3-WORD CLUES)
// ==========================================
const wordsPool = {
    Short: [
        { word: "BONE", clue: "White, Skeleton, Dog", clue2: "Hard calcium." }, 
        { word: "WOLF", clue: "Animal, Howl, Moon", clue2: "Pack predator." }, 
        { word: "DARK", clue: "No light, Black", clue2: "Night time." },
        { word: "FEAR", clue: "Scared, Panic, Run", clue2: "Heart racing." }, 
        { word: "ROPE", clue: "Tie, Hang, Knot", clue2: "Swing, Tying." }, 
        { word: "FIRE", clue: "Burn, Hot, Flame", clue2: "Red, Smoke." },
        { word: "PAIN", clue: "Hurt, Cry, Ouch", clue2: "Suffer, Ache." }, 
        { word: "DEAD", clue: "No life, Cold", clue2: "End, Corpse." }, 
        { word: "HIDE", clue: "Seek, Secret, Unseen", clue2: "Cover, Safe." }
    ],
    Medium: [
        { word: "GHOST", clue: "White, Spirit, Boo", clue2: "Float, Haunt." }, 
        { word: "BLOOD", clue: "Red, Veins, Cut", clue2: "Drop, Bleed." }, 
        { word: "KNIFE", clue: "Sharp, Cut, Metal", clue2: "Kitchen, Stab." },
        { word: "GRAVE", clue: "Hole, Dead, Dirt", clue2: "Stone, Buried." }, 
        { word: "SNAKE", clue: "Hiss, Bite, Poison", clue2: "Slither, Animal." }, 
        { word: "DEVIL", clue: "Evil, Hell, Horns", clue2: "Red, Fire." },
        { word: "SKULL", clue: "Head, Bone, Face", clue2: "Empty, White." }, 
        { word: "WITCH", clue: "Broom, Magic, Hat", clue2: "Spell, Cackle." }
    ],
    Long: [
        { word: "VAMPIRE", clue: "Bite, Neck, Blood", clue2: "Bat, Dracula." }, 
        { word: "MONSTER", clue: "Scary, Beast, Bed", clue2: "Creature, Hide." },
        { word: "ZOMBIE", clue: "Walk, Dead, Brains", clue2: "Infected, Bite." }, 
        { word: "POISON", clue: "Drink, Toxic, Sick", clue2: "Venom, Vial." },
        { word: "COFFIN", clue: "Box, Dead, Wood", clue2: "Vampire, Rest." }, 
        { word: "MURDER", clue: "Kill, Crime, Police", clue2: "Weapon, Dead." }
    ],
    Extreme: [
        { word: "CEMETERY", clue: "Graves, Dead, Yard", clue2: "Tombstones, Spooky." }, 
        { word: "SKELETON", clue: "Bones, Skull, Body", clue2: "Walking, Dead." },
        { word: "NIGHTMARE", clue: "Bad dream, Scary", clue2: "Sleep, Wake." }, 
        { word: "SACRIFICE", clue: "Offer, Kill, God", clue2: "Altar, Blood." },
        { word: "TORTURE", clue: "Pain, Slow, Hurt", clue2: "Suffer, Tool." }, 
        { word: "CHAINSAW", clue: "Machine, Cut, Loud", clue2: "Blade, Motor." }
    ]
};

const levelsData = Array.from({length: 20}, (_, i) => {
    let id = i + 1; let diff, diffKey, pts;
    if (id <= 5) { diff = "Easy"; diffKey = "Short"; pts = 10; } 
    else if (id <= 10) { diff = "Medium"; diffKey = "Medium"; pts = 15; } 
    else if (id <= 15) { diff = "Hard"; diffKey = "Long"; pts = 20; } 
    else { diff = "Super Hard"; diffKey = "Extreme"; pts = 30; }
    return { id, title: `Chamber ${id}`, diff, diffKey, pts, unlockPts: (id - 1) * 10 };
});

// ==========================================
// 3. AUDIO SYNTHESIZER
// ==========================================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function initAudio() { if (!audioCtx) audioCtx = new AudioContext(); if (audioCtx.state === 'suspended') audioCtx.resume(); }

function playTone(freq, type, duration, vol=0.1, freqEnd = null) {
    if(!audioCtx) return;
    const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    if(freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
}

const wrongSounds = [
    () => playTone(150, 'sine', 0.5, 0.4, 40), () => playTone(800, 'sawtooth', 0.3, 0.2, 1200),
    () => { playTone(600, 'square', 0.4, 0.1); playTone(630, 'square', 0.4, 0.1); }, () => playTone(60, 'sawtooth', 0.6, 0.4),
    () => playTone(300, 'triangle', 0.7, 0.3, 100), () => playTone(1200, 'square', 0.1, 0.2, 200)
];

const sounds = {
    correct: () => playTone(650, 'sine', 0.15, 0.1),
    wrongRandom: () => { wrongSounds[Math.floor(Math.random() * wrongSounds.length)](); },
    heartbeat: () => { playTone(60, 'sine', 0.1, 0.5); setTimeout(() => playTone(60, 'sine', 0.2, 0.4), 200); },
    unlock: () => { playTone(300, 'sine', 0.15, 0.2); setTimeout(() => playTone(500, 'sine', 0.2, 0.2), 120); setTimeout(() => playTone(750, 'sine', 0.4, 0.3), 240); },
    extremeJumpscare: () => {
        if(!audioCtx) return;
        const gain = audioCtx.createGain(); gain.connect(audioCtx.destination);
        gain.gain.setValueAtTime(1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.5);
        const osc1 = audioCtx.createOscillator(); osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(150, audioCtx.currentTime); osc1.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 1.5);
        osc1.connect(gain); osc1.start(); osc1.stop(audioCtx.currentTime + 1.5);
    }
};

// ==========================================
// 4. AUTH & MULTI-USER STORAGE
// ==========================================
let authenticatedUser = localStorage.getItem('currentUser') || "";
let totalPoints = 0; let completedLevels = []; let currentLevelIndex = 0; 
let globalUsedWords = [];

const screens = { auth: document.getElementById('auth-page'), landing: document.getElementById('landing-page'), levelSelect: document.getElementById('level-page'), game: document.getElementById('game-page') };
function showScreen(screenKey) { Object.values(screens).forEach(s => s.classList.remove('active')); screens[screenKey].classList.add('active'); }

window.addEventListener('DOMContentLoaded', () => { 
    if (authenticatedUser) { loadUserData(); showScreen('landing'); } 
    else { showScreen('auth'); } 
});

bindClick('sign-up-btn', () => {
    initAudio();
    const user = document.getElementById('auth-user').value.trim(); const pass = document.getElementById('auth-pass').value.trim();
    if(!user || !pass) { showScaryToast("USERNAME AND PASSCODE REQUIRED!"); return; }
    if(localStorage.getItem(`pwd_${user}`)) { showScaryToast("SOUL ALREADY CLAIMED! SIGN IN."); return; }
    localStorage.setItem(`pwd_${user}`, pass);
    document.getElementById('auth-msg').style.color = "var(--success)"; document.getElementById('auth-msg').innerText = "Pact Sealed! Now click SIGN IN.";
});

bindClick('sign-in-btn', () => {
    initAudio();
    const user = document.getElementById('auth-user').value.trim(); const pass = document.getElementById('auth-pass').value.trim();
    const msg = document.getElementById('auth-msg'); msg.style.color = "var(--danger)";
    if(!user || !pass) { msg.innerText = "Identify yourself fully!"; return; }
    const savedPass = localStorage.getItem(`pwd_${user}`);
    if(!savedPass) { msg.innerText = "Soul not found. Sign up first."; return; }
    if(savedPass !== pass) { msg.innerText = "Wrong Passcode. Access denied."; return; }
    authenticatedUser = user; localStorage.setItem('currentUser', user); loadUserData(); msg.innerText = ""; showScreen('landing');
});

function loadUserData() { 
    totalPoints = parseInt(localStorage.getItem(`pts_${authenticatedUser}`)) || 0; 
    completedLevels = JSON.parse(localStorage.getItem(`comp_${authenticatedUser}`)) || []; 
    let loadedWords = JSON.parse(localStorage.getItem(`tracker_${authenticatedUser}`));
    globalUsedWords = Array.isArray(loadedWords) ? loadedWords : [];
    document.getElementById('map-player-name').innerText = authenticatedUser; updateStatsUI(); 
}

function saveProgress() { 
    localStorage.setItem(`pts_${authenticatedUser}`, totalPoints); 
    localStorage.setItem(`comp_${authenticatedUser}`, JSON.stringify(completedLevels)); 
    localStorage.setItem(`tracker_${authenticatedUser}`, JSON.stringify(globalUsedWords)); 
    updateStatsUI(); 
}

function updateStatsUI() { document.getElementById('map-total-score').innerText = totalPoints; document.getElementById('current-score').innerText = totalPoints; }

function logoutUser() { authenticatedUser = ""; localStorage.removeItem('currentUser'); document.getElementById('auth-user').value = ""; document.getElementById('auth-pass').value = ""; showScreen('auth'); }
bindClick('logout-btn-landing', logoutUser);
bindClick('logout-btn-map', logoutUser);

// AUTO FULLSCREEN ON ENTRY
bindClick('enter-game-btn', () => { 
    initAudio(); 
    goFullscreen(); 
    renderLevelGrid(); 
    showScreen('levelSelect'); 
});
bindClick('map-back-btn', () => showScreen('landing'));

// ==========================================
// 5. GAMEPLAY ENGINE & BUG FREE BUTTONS
// ==========================================
let currentWord = "", currentClue = "", currentClue2 = "", guessedLetters = new Set();
let mistakes = 0, hintsUsed = 0, extraClueUsed = false;
let timeRemaining = 15, timerInterval = null, isLevelStarted = false;

const timerSelect = document.getElementById('timer-select'); const timerDisplay = document.getElementById('timer-display');
const wordDisplay = document.getElementById('word-display'); const keyboardDiv = document.getElementById('keyboard');
const startExecutionBtn = document.getElementById('start-execution-btn'); const restartLevelBtn = document.getElementById('restart-level-btn');
const backToLevelsBtn = document.getElementById('back-to-levels-btn'); 
const hintBtn = document.getElementById('hint-btn'); const victimInput = document.getElementById('victim-name');
const extraClueBtn = document.getElementById('extra-clue-btn'); 
const extraClueContainer = document.getElementById('extra-clue-container'); const extraClueText = document.getElementById('extra-clue');

// GLOBAL MODAL BUTTON BINDING
bindClick('unlock-to-map-btn', () => { document.getElementById('unlock-modal').classList.remove('show'); renderLevelGrid(); showScreen('levelSelect'); });
bindClick('lose-to-map-btn', () => { document.getElementById('lose-modal').classList.remove('show'); renderLevelGrid(); showScreen('levelSelect'); });
bindClick('win-to-map-btn', () => { document.getElementById('win-modal').classList.remove('show'); renderLevelGrid(); showScreen('levelSelect'); });

bindClick('retry-level-btn', () => { 
    document.getElementById('lose-modal').classList.remove('show'); 
    prepareLevel(currentLevelIndex); 
});

bindClick('win-next-btn', () => { 
    document.getElementById('win-modal').classList.remove('show'); 
    let nextLvl = levelsData[currentLevelIndex + 1]; 
    if (nextLvl && totalPoints >= nextLvl.unlockPts) prepareLevel(currentLevelIndex + 1); 
    else { renderLevelGrid(); showScreen('levelSelect'); } 
});

bindClick('next-level-btn', () => { 
    document.getElementById('unlock-modal').classList.remove('show'); 
    if (currentLevelIndex + 1 < levelsData.length) prepareLevel(currentLevelIndex + 1); 
    else { renderLevelGrid(); showScreen('levelSelect'); } 
});

bindClick('back-to-levels-btn', () => { 
    clearInterval(timerInterval); 
    renderLevelGrid(); 
    showScreen('levelSelect'); 
});

function renderLevelGrid() {
    const grid = document.getElementById('level-grid'); grid.innerHTML = ''; updateStatsUI();
    levelsData.forEach((lvl, idx) => {
        const card = document.createElement('div'); card.classList.add('level-card');
        const isUnlocked = totalPoints >= lvl.unlockPts; const isCompleted = completedLevels.includes(lvl.id);
        if (isCompleted) { card.classList.add('completed'); card.innerHTML = `<div class="card-icon">🗡️</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">SURVIVED (+${lvl.pts})</div>`; card.onclick = () => prepareLevel(idx); } 
        else if (isUnlocked) { card.classList.add('unlocked'); card.innerHTML = `<div class="card-icon">⚡</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">${lvl.diff} (Needs ${lvl.unlockPts} Pts)</div>`; card.onclick = () => prepareLevel(idx); } 
        else { card.classList.add('locked'); card.innerHTML = `<div class="card-icon">💀</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">LOCKED (Needs ${lvl.unlockPts} Pts)</div>`; }
        grid.appendChild(card);
    });
}

function prepareLevel(index) {
    currentLevelIndex = index; const lvl = levelsData[index];
    
    document.getElementById('current-level-badge').innerText = `CHAMBER ${lvl.id} OF 20`;
    document.getElementById('level-title-display').innerText = `CHAMBER ${lvl.id}`;
    document.getElementById('level-diff-tag').innerText = `Difficulty: ${lvl.diff.toUpperCase()} (+${lvl.pts} Pts)`;
    victimInput.value = ""; document.getElementById('display-player').innerText = `Waiting...`;
    
    showScreen('game'); resetBoardState();
}

function resetBoardState() {
    clearInterval(timerInterval); isLevelStarted = false; hintsUsed = 0; extraClueUsed = false;
    
    startExecutionBtn.classList.remove('hidden-btn'); 
    restartLevelBtn.classList.add('hidden-btn');
    backToLevelsBtn.classList.remove('hidden-btn'); 

    hintBtn.innerText = "👁️ Reveal Letter (-2 Pts)"; hintBtn.classList.remove('disabled');
    extraClueBtn.innerText = "📜 Extra Clue (-3 Pts)"; extraClueBtn.classList.remove('disabled');
    extraClueContainer.classList.add('hidden-btn');

    guessedLetters.clear(); mistakes = 0; document.getElementById('mistake-count').innerText = mistakes;
    document.querySelectorAll('.draw-part').forEach(p => p.classList.remove('visible'));
    
    timerDisplay.innerText = "00:15"; timerSelect.value = "15"; timerDisplay.classList.remove('panic');
    document.getElementById('current-clue').innerText = "Will reveal upon start...";
    wordDisplay.innerHTML = `<div class="scary-placeholder">AWAITING EXECUTION...</div>`;
    
    buildKeyboard(true);
}

function formatTime(s) { return `00:${s < 10 ? '0'+s : s}`; }

function buildKeyboard(isDisabled) {
    keyboardDiv.innerHTML = "";
    const qwertyRows = [ ['Q','W','E','R','T','Y','U','I','O','P'], ['A','S','D','F','G','H','J','K','L'], ['Z','X','C','V','B','N','M'] ];
    qwertyRows.forEach(row => {
        const rowDiv = document.createElement('div'); rowDiv.classList.add('keyboard-row');
        row.forEach(char => {
            let btn = document.createElement('button'); btn.innerText = char; btn.id = `key-${char}`; btn.classList.add('key');
            if(isDisabled) btn.classList.add('disabled');
            btn.onclick = () => handleGuess(char); rowDiv.appendChild(btn);
        });
        keyboardDiv.appendChild(rowDiv);
    });
}

timerSelect.addEventListener('change', () => { if (!isLevelStarted) timerDisplay.innerText = formatTime(parseInt(timerSelect.value)); });

// START EXECUTION LOGIC
bindClick('start-execution-btn', () => {
    initAudio();
    const vName = victimInput.value.trim();
    if(vName === "") { 
        showScaryToast("THE REAPER DEMANDS A VICTIM'S NAME!"); 
        victimInput.focus(); return; 
    }
    victimInput.blur(); 
    
    let tVal = parseInt(timerSelect.value); let lvlId = levelsData[currentLevelIndex].id; let pool = [];
    if (tVal === 15) pool = wordsPool.Short.concat(wordsPool.Medium);
    else if (tVal === 30) pool = wordsPool.Medium.concat(wordsPool.Long);
    else if (tVal === 60) pool = wordsPool.Long.concat(wordsPool.Extreme);
    else pool = wordsPool.Extreme;

    let available = pool.filter(obj => !globalUsedWords.includes(obj.word.toUpperCase()));
    if (available.length === 0) {
        globalUsedWords = globalUsedWords.filter(w => !pool.some(p => p.word.toUpperCase() === w));
        available = pool;
    }

    const randomWordObj = available[Math.floor(Math.random() * available.length)];
    currentWord = randomWordObj.word.toUpperCase(); currentClue = randomWordObj.clue; currentClue2 = randomWordObj.clue2;
    
    globalUsedWords.push(currentWord); saveProgress(); 

    document.getElementById('current-clue').innerText = currentClue;
    document.getElementById('display-player').innerText = vName;
    
    startExecutionBtn.classList.add('hidden-btn'); 
    restartLevelBtn.classList.remove('hidden-btn');
    backToLevelsBtn.classList.add('hidden-btn'); // NO ESCAPE

    isLevelStarted = true; buildKeyboard(false); 
    
    wordDisplay.innerHTML = "";
    for(let char of currentWord) {
        const box = document.createElement('div'); box.classList.add('letter-box');
        wordDisplay.appendChild(box);
    }

    timeRemaining = tVal; timerDisplay.innerText = formatTime(timeRemaining);
    timerInterval = setInterval(updateTimer, 1000);
});

bindClick('restart-level-btn', () => prepareLevel(currentLevelIndex));

// SHORTCUTS SYSTEM (CTRL)
window.addEventListener('keydown', (e) => { 
    if (e.key === "Control" || e.ctrlKey) { document.getElementById('shortcuts-overlay').classList.remove('hidden'); }
    if (document.activeElement === victimInput && e.key !== "Enter") return;

    if (!isLevelStarted) {
        if (e.key === "Enter" && screens.game.classList.contains('active') && !startExecutionBtn.classList.contains('hidden-btn')) {
            startExecutionBtn.click();
        }
        return;
    }

    if (e.key === "1") hintBtn.click();
    if (e.key === "2") extraClueBtn.click();
    if (e.key === "0") document.getElementById('give-up-btn').click();

    const char = e.key.toUpperCase(); 
    if (char >= 'A' && char <= 'Z' && char.length === 1) handleGuess(char); 
});

window.addEventListener('keyup', (e) => {
    if (e.key === "Control" || !e.ctrlKey) { document.getElementById('shortcuts-overlay').classList.add('hidden'); }
});

function updateTimer() {
    if (!isLevelStarted) return;
    timeRemaining--; timerDisplay.innerText = formatTime(timeRemaining);
    if (timeRemaining <= 10 && timeRemaining > 0) { timerDisplay.classList.add('panic'); sounds.heartbeat(); }
    if (timeRemaining <= 0) triggerDeath();
}

function triggerSideScare() {
    const scares = ['scare-left', 'scare-right', 'scare-bottom'];
    const randomScare = document.getElementById(scares[Math.floor(Math.random() * scares.length)]);
    randomScare.classList.add('peek'); setTimeout(() => randomScare.classList.remove('peek'), 350); 
}

function handleGuess(char) {
    if (!isLevelStarted || guessedLetters.has(char) || mistakes >= 10) return;
    guessedLetters.add(char); const btn = document.getElementById(`key-${char}`);

    if (currentWord.includes(char)) {
        sounds.correct(); if(btn) btn.classList.add('correct', 'disabled'); 
        
        const boxes = wordDisplay.children;
        for (let i=0; i<currentWord.length; i++) {
            if (currentWord[i] === char) { boxes[i].innerText = char; boxes[i].classList.add('filled'); }
        }

        let isWon = Array.from(currentWord).every(c => guessedLetters.has(c));
        if(isWon) handleLevelWin();
    } else {
        sounds.wrongRandom(); if(btn) btn.classList.add('wrong', 'disabled');
        mistakes++; document.getElementById('mistake-count').innerText = mistakes;
        
        document.body.classList.add('shake-hard'); setTimeout(() => document.body.classList.remove('shake-hard'), 280);
        triggerSideScare();
        const part = document.getElementById(`part-${mistakes - 1}`); if (part) part.classList.add('visible');

        if (mistakes >= 10) triggerDeath();
    }
}

function handleLevelWin() {
    isLevelStarted = false; clearInterval(timerInterval); timerDisplay.classList.remove('panic');
    backToLevelsBtn.classList.remove('hidden-btn'); 

    const lvl = levelsData[currentLevelIndex];
    totalPoints += lvl.pts; if (!completedLevels.includes(lvl.id)) completedLevels.push(lvl.id); saveProgress();

    let nextLvl = levelsData[currentLevelIndex + 1]; let nextUnlockedNow = (nextLvl && totalPoints >= nextLvl.unlockPts);
    if (nextUnlockedNow) {
        sounds.unlock(); document.getElementById('points-earned-badge').innerText = `+${lvl.pts} BLOOD POINTS`;
        document.getElementById('unlock-desc').innerText = `Chamber ${lvl.id} survived! Chamber ${nextLvl.id} UNLOCKED!`; document.getElementById('unlock-modal').classList.add('show');
    } else {
        sounds.unlock(); document.getElementById('win-word').innerText = currentWord; document.getElementById('win-modal').classList.add('show');
    }
}

function triggerDeath() {
    isLevelStarted = false; clearInterval(timerInterval); timerDisplay.classList.remove('panic');
    backToLevelsBtn.classList.remove('hidden-btn'); 
    sounds.extremeJumpscare(); 
    
    const jumpscare = document.getElementById('jumpscare'); jumpscare.classList.remove('hidden');
    setTimeout(() => { 
        jumpscare.classList.add('hidden'); 
        document.querySelectorAll('.draw-part').forEach(p => p.classList.add('visible')); 
        document.getElementById('lose-word').innerText = currentWord; 
        document.getElementById('lose-modal').classList.add('show'); 
    }, 1400);
}

bindClick('hint-btn', () => {
    if (!isLevelStarted) return; if (hintsUsed >= 1) { showScaryToast("⚠️ REVEAL LETTER CHANCE ALREADY USED!"); return; }
    let unGuessed = currentWord.split('').filter(c => !guessedLetters.has(c));
    if (unGuessed.length > 0) { 
        totalPoints = Math.max(0, totalPoints - 2); saveProgress(); 
        hintsUsed++; hintBtn.innerText = "👁️ Letter Revealed"; hintBtn.classList.add('disabled');
        handleGuess(unGuessed[0]); 
    }
});

bindClick('extra-clue-btn', () => {
    if (!isLevelStarted) return; if (extraClueUsed) { showScaryToast("⚠️ EXTRA CLUE ALREADY USED!"); return; }
    totalPoints = Math.max(0, totalPoints - 3); saveProgress(); extraClueUsed = true;
    extraClueBtn.innerText = "📜 Clue Used"; extraClueBtn.classList.add('disabled');
    extraClueText.innerText = currentClue2; extraClueContainer.classList.remove('hidden-btn');
});

bindClick('give-up-btn', () => { if (isLevelStarted) triggerDeath(); });

// ==========================================
// 6. BACKGROUND PARTICLES 
// ==========================================
const canvas = document.getElementById('particles'), ctx = canvas.getContext('2d');
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();
let parts = Array.from({ length: 80 }).map(() => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vy: Math.random() * -1 - 0.3, r: Math.random() * 2.5 + 1 }));
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 0, 0, 0.6)'; ctx.fill(); p.y += p.vy; if (p.y < 0) p.y = canvas.height; });
    requestAnimationFrame(animate);
}
animate();