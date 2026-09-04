// ==========================================
// 1. DYNAMIC REAL-LIFE HORROR DICTIONARY (100 WORDS)
// ==========================================
const wordsPool = {
    Easy: [
        { word: "KNIFE", clue: "Cuts vegetables and throats too." },
        { word: "ROPE", clue: "Ties things or hangs people." },
        { word: "PILLOW", clue: "Smothers you in your sleep." },
        { word: "POISON", clue: "Mix it in their tea." },
        { word: "FIRE", clue: "Burns the house to ashes." },
        { word: "WATER", clue: "You can drown in it." },
        { word: "BRICK", clue: "Smash it on their head." },
        { word: "GLASS", clue: "Sharp shards cut very deep." },
        { word: "WIRE", clue: "Chokes them from behind." },
        { word: "AXE", clue: "Chops wood and human bones." },
        { word: "CAR", clue: "Run them over at night." },
        { word: "DRUG", clue: "Puts them to sleep forever." },
        { word: "CLIFF", clue: "Push them off the edge." },
        { word: "CHOKE", clue: "Squeeze the neck very hard." },
        { word: "DOG", clue: "Let the beast bite them." },
        { word: "BLADE", clue: "A small sharp metal slice." },
        { word: "NAIL", clue: "Hammer it into the skull." },
        { word: "DART", clue: "Shot from a blowpipe." },
        { word: "GUN", clue: "Loud bang and sudden death." },
        { word: "DROWN", clue: "Hold their head underwater." },
        { word: "GHOST", clue: "Dead soul watching you sleep." },
        { word: "BLOOD", clue: "Red liquid inside of you." },
        { word: "GRAVE", clue: "Hole in the ground." },
        { word: "SCAR", clue: "Mark left after the cut." },
        { word: "BITE", clue: "Teeth sinking into flesh." }
    ],
    Medium: [
        { word: "HATCHET", clue: "Small axe for quick chops." },
        { word: "CYANIDE", clue: "Deadly fast acting toxic chemical." },
        { word: "BASEMENT", clue: "Where the bodies are hidden." },
        { word: "FREEZER", clue: "Keeps the dead meat cold." },
        { word: "SCISSORS", clue: "Sharp tool in your drawer." },
        { word: "HAMMER", clue: "Heavy tool to crush skulls." },
        { word: "MACHETE", clue: "Heavy blade for butchering meat." },
        { word: "VENOM", clue: "Snake bite that kills you." },
        { word: "BULLET", clue: "Metal entering the brain fast." },
        { word: "NEEDLE", clue: "Injecting deadly air into veins." },
        { word: "RAZOR", clue: "Slitting the wrist very cleanly." },
        { word: "DAGGER", clue: "Short knife for stabbing chests." },
        { word: "SCALPEL", clue: "Surgical tool that cuts skin." },
        { word: "SICKLE", clue: "Curved blade for cutting throats." },
        { word: "MALLET", clue: "Wooden hammer to break bones." },
        { word: "SHOVEL", clue: "Used to bury them alive." },
        { word: "CROWBAR", clue: "Heavy iron bar swinging down." },
        { word: "WRENCH", clue: "Blunt force trauma to head." },
        { word: "ACID", clue: "Melts the face right off." },
        { word: "TOXIC", clue: "Gas that destroys the lungs." },
        { word: "STARVE", clue: "Lock them up without food." },
        { word: "BURIED", clue: "Trapped alive under the dirt." },
        { word: "HANGED", clue: "Kicking air on a rope." },
        { word: "SCREAM", clue: "The last sound they make." },
        { word: "CORPSE", clue: "The cold dead body left." }
    ],
    Hard: [
        { word: "SUFFOCATE", clue: "No air left to breathe." },
        { word: "APPARITION", clue: "Faint ghost in the hallway." },
        { word: "CHAINSAW", clue: "Loud motor that cuts flesh." },
        { word: "ARSENIC", clue: "Untraceable deadly toxic white powder." },
        { word: "PARALYZE", clue: "Cannot move while they attack." },
        { word: "TORTURE", clue: "Slow and very painful death." },
        { word: "SLAUGHTER", clue: "Killing like a farm animal." },
        { word: "INFECTION", clue: "Dirty wound rotting the body." },
        { word: "OVERDOSE", clue: "Too many pills at once." },
        { word: "CRUSHED", clue: "Heavy weight breaking the ribs." },
        { word: "FREEZING", clue: "Turning to ice in winter." },
        { word: "BURNING", clue: "Flesh melting in the fire." },
        { word: "STALKER", clue: "Following you in the dark." },
        { word: "SHOTGUN", clue: "Blows the whole head off." },
        { word: "HARPOON", clue: "Spear fired into the chest." },
        { word: "CLEAVER", clue: "Heavy chopping blade in kitchen." },
        { word: "HACKSAW", clue: "Slowly cutting through the bone." },
        { word: "BASEBALL", clue: "Bat used to smash faces." },
        { word: "INTRUDER", clue: "Someone broke into the house." },
        { word: "HOSTAGE", clue: "Tied to a chair forever." },
        { word: "KIDNAP", clue: "Thrown into a dark van." },
        { word: "PITCHFORK", clue: "Long farming tool for stabbing." },
        { word: "CROSSBOW", clue: "Silent arrow into the neck." },
        { word: "INCINERATOR", clue: "Burns bodies to hide evidence." },
        { word: "STABBING", clue: "Multiple knife wounds in back." }
    ],
    SuperHard: [
        { word: "STRANGULATION", clue: "Hands tightly gripping the neck." },
        { word: "GUILLOTINE", clue: "Drops fast to slice heads." },
        { word: "ASPHYXIATION", clue: "Dying from total oxygen lack." },
        { word: "HEMORRHAGE", clue: "Severe bleeding from the inside." },
        { word: "DISEMBOWEL", clue: "Removing the guts and organs." },
        { word: "ELECTROCUTION", clue: "High voltage stopping your heart." },
        { word: "DECAPITATION", clue: "Head completely removed from body." },
        { word: "MUTILATION", clue: "Destroying body beyond any recognition." },
        { word: "LOBOTOMY", clue: "Needle through the brain eye." },
        { word: "PSYCHOPATH", clue: "Killer with zero human empathy." },
        { word: "CANNIBALISM", clue: "Eating the flesh of humans." },
        { word: "DISMEMBER", clue: "Chopping off arms and legs." },
        { word: "EVISCERATE", clue: "Slashing open the belly wide." },
        { word: "LACERATION", clue: "Deep jagged cut on skin." },
        { word: "PUNCTURE", clue: "Deep hole into the lung." },
        { word: "TOURNIQUET", clue: "Tying off the blood flow." },
        { word: "STRYCHNINE", clue: "Poison causing severe muscle spasms." },
        { word: "CHLOROFORM", clue: "Chemical rag over the mouth." },
        { word: "BELLADONNA", clue: "Deadly nightshade plant toxin extract." },
        { word: "RICIN", clue: "Lethal poison from castor beans." },
        { word: "HEMLOCK", clue: "Toxic plant that killed Socrates." },
        { word: "ANTHRAX", clue: "Deadly white powder in mail." },
        { word: "BOTULISM", clue: "Toxin paralyzing the respiratory muscles." },
        { word: "BLOODHOUND", clue: "Dogs tracking your fearful scent." },
        { word: "MUTANT", clue: "Deformed creature in the woods." }
    ]
};

// Word Tracker to prevent repetition
let usedWordsTracker = { Easy: [], Medium: [], Hard: [], SuperHard: [] };

const levelsData = Array.from({length: 20}, (_, i) => {
    let id = i + 1; let diff, diffKey, pts;
    if (id <= 5) { diff = "Easy"; diffKey = "Easy"; pts = 10; } 
    else if (id <= 10) { diff = "Medium"; diffKey = "Medium"; pts = 15; } 
    else if (id <= 15) { diff = "Hard"; diffKey = "Hard"; pts = 20; } 
    else { diff = "Super Hard"; diffKey = "SuperHard"; pts = 30; }
    return { id, title: `Chamber ${id}`, diff, diffKey, pts, unlockPts: (id - 1) * 10 };
});

// ==========================================
// 2. AUDIO SYNTHESIZER
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
    () => playTone(300, 'triangle', 0.7, 0.3, 100), () => playTone(1200, 'square', 0.1, 0.2, 200),
    () => playTone(1500, 'sine', 0.8, 0.1, 1400), () => playTone(250, 'square', 0.2, 0.3, 50),
    () => { playTone(100, 'sawtooth', 0.2, 0.3); setTimeout(() => playTone(500, 'square', 0.1, 0.1), 100); }, () => playTone(80, 'triangle', 0.9, 0.5)
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
        const osc2 = audioCtx.createOscillator(); osc2.type = 'square';
        osc2.frequency.setValueAtTime(2000, audioCtx.currentTime); osc2.frequency.exponentialRampToValueAtTime(500, audioCtx.currentTime + 1.5);
        osc2.connect(gain); osc2.start(); osc2.stop(audioCtx.currentTime + 1.5);
    }
};

// ==========================================
// 3. AUTHENTICATION & MULTI-USER STORAGE
// ==========================================
let authenticatedUser = localStorage.getItem('currentUser') || "";
let totalPoints = 0; let completedLevels = []; let currentLevelIndex = 0; 

const screens = { auth: document.getElementById('auth-page'), landing: document.getElementById('landing-page'), levelSelect: document.getElementById('level-page'), game: document.getElementById('game-page') };
function showScreen(screenKey) { Object.values(screens).forEach(s => s.classList.remove('active')); screens[screenKey].classList.add('active'); }

window.addEventListener('DOMContentLoaded', () => { if (authenticatedUser) { loadUserData(); showScreen('landing'); } else { showScreen('auth'); } });

document.getElementById('sign-up-btn').addEventListener('click', () => {
    initAudio();
    const user = document.getElementById('auth-user').value.trim(); const pass = document.getElementById('auth-pass').value.trim();
    if(!user || !pass) { document.getElementById('auth-msg').innerText = "Username and Passcode required!"; return; }
    if(localStorage.getItem(`pwd_${user}`)) { document.getElementById('auth-msg').innerText = "Soul already claimed! Sign in instead."; return; }
    localStorage.setItem(`pwd_${user}`, pass);
    document.getElementById('auth-msg').style.color = "var(--success)"; document.getElementById('auth-msg').innerText = "Pact Sealed! Now click SIGN IN.";
});

document.getElementById('sign-in-btn').addEventListener('click', () => {
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
    // Load word tracker memory
    let savedTracker = localStorage.getItem(`tracker_${authenticatedUser}`);
    if(savedTracker) usedWordsTracker = JSON.parse(savedTracker);
    
    document.getElementById('map-player-name').innerText = authenticatedUser; updateStatsUI(); 
}

function saveProgress() { 
    localStorage.setItem(`pts_${authenticatedUser}`, totalPoints); 
    localStorage.setItem(`comp_${authenticatedUser}`, JSON.stringify(completedLevels)); 
    localStorage.setItem(`tracker_${authenticatedUser}`, JSON.stringify(usedWordsTracker)); 
    updateStatsUI(); 
}

function updateStatsUI() { document.getElementById('map-total-score').innerText = totalPoints; document.getElementById('current-score').innerText = totalPoints; }

function logoutUser() { authenticatedUser = ""; localStorage.removeItem('currentUser'); document.getElementById('auth-user').value = ""; document.getElementById('auth-pass').value = ""; showScreen('auth'); }
document.getElementById('logout-btn-landing').addEventListener('click', logoutUser); document.getElementById('logout-btn-map').addEventListener('click', logoutUser);

document.getElementById('enter-game-btn').addEventListener('click', () => { initAudio(); renderLevelGrid(); showScreen('levelSelect'); });
document.getElementById('map-back-btn').addEventListener('click', () => showScreen('landing'));

document.getElementById('back-to-levels-btn').addEventListener('click', () => { clearInterval(timerInterval); renderLevelGrid(); showScreen('levelSelect'); });
document.getElementById('unlock-to-map-btn').addEventListener('click', () => { document.getElementById('unlock-modal').classList.remove('show'); renderLevelGrid(); showScreen('levelSelect'); });
document.getElementById('lose-to-map-btn').addEventListener('click', () => { document.getElementById('lose-modal').classList.remove('show'); renderLevelGrid(); showScreen('levelSelect'); });
document.getElementById('retry-level-btn').addEventListener('click', () => { document.getElementById('lose-modal').classList.remove('show'); prepareLevel(currentLevelIndex); });

function renderLevelGrid() {
    const grid = document.getElementById('level-grid'); grid.innerHTML = ''; updateStatsUI();
    levelsData.forEach((lvl, idx) => {
        const card = document.createElement('div'); card.classList.add('level-card');
        const isUnlocked = totalPoints >= lvl.unlockPts; const isCompleted = completedLevels.includes(lvl.id);
        if (isCompleted) { card.classList.add('completed'); card.innerHTML = `<div class="card-icon">🗡️</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">SURVIVED (+${lvl.pts})</div>`; card.addEventListener('click', () => prepareLevel(idx)); } 
        else if (isUnlocked) { card.classList.add('unlocked'); card.innerHTML = `<div class="card-icon">⚡</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">${lvl.diff} (Needs ${lvl.unlockPts} Pts)</div>`; card.addEventListener('click', () => prepareLevel(idx)); } 
        else { card.classList.add('locked'); card.innerHTML = `<div class="card-icon">💀</div><div class="card-num">CHAMBER ${lvl.id}</div><div class="card-diff">LOCKED (Needs ${lvl.unlockPts} Pts)</div>`; }
        grid.appendChild(card);
    });
}

// ==========================================
// 4. GAMEPLAY ENGINE
// ==========================================
let currentWord = "", currentClue = "", guessedLetters = new Set();
let mistakes = 0, hintsUsed = 0, timeRemaining = 15, timerInterval = null, isLevelStarted = false;

const timerSelect = document.getElementById('timer-select'); const timerDisplay = document.getElementById('timer-display');
const wordDisplay = document.getElementById('word-display'); const keyboardDiv = document.getElementById('keyboard');
const startExecutionBtn = document.getElementById('start-execution-btn'); const restartLevelBtn = document.getElementById('restart-level-btn');
const hintBtn = document.getElementById('hint-btn'); const victimInput = document.getElementById('victim-name');

function prepareLevel(index) {
    currentLevelIndex = index; const lvl = levelsData[index];
    const diffKey = lvl.diffKey; 
    
    // Non-repeating Word Logic
    let availableWords = wordsPool[diffKey].filter(obj => !usedWordsTracker[diffKey].includes(obj.word));
    
    // If all words in category used, reset the tracker for that category
    if(availableWords.length === 0) {
        usedWordsTracker[diffKey] = [];
        availableWords = wordsPool[diffKey];
    }
    
    const randomWordObj = availableWords[Math.floor(Math.random() * availableWords.length)];
    currentWord = randomWordObj.word.toUpperCase(); 
    currentClue = randomWordObj.clue;
    
    // Mark word as used
    usedWordsTracker[diffKey].push(currentWord);
    saveProgress();

    document.getElementById('current-level-badge').innerText = `CHAMBER ${lvl.id} OF 20`;
    document.getElementById('level-title-display').innerText = `CHAMBER ${lvl.id}`;
    document.getElementById('level-diff-tag').innerText = `Difficulty: ${lvl.diff.toUpperCase()} (+${lvl.pts} Pts)`;
    
    victimInput.value = ""; document.getElementById('display-player').innerText = `Waiting...`;
    
    showScreen('game'); resetBoardState();
}

function resetBoardState() {
    clearInterval(timerInterval); isLevelStarted = false; hintsUsed = 0;
    startExecutionBtn.classList.remove('hidden-btn'); restartLevelBtn.classList.add('hidden-btn');
    hintBtn.innerText = "👁️ Reveal Letter (-2 Pts)";
    guessedLetters.clear(); mistakes = 0; document.getElementById('mistake-count').innerText = mistakes;
    document.querySelectorAll('.draw-part').forEach(p => p.classList.remove('visible'));
    
    timerDisplay.innerText = "00:15"; timerSelect.value = "15"; 
    timerDisplay.classList.remove('panic');
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
            btn.addEventListener('click', () => handleGuess(char)); rowDiv.appendChild(btn);
        });
        keyboardDiv.appendChild(rowDiv);
    });
}

timerSelect.addEventListener('change', () => { if (!isLevelStarted) timerDisplay.innerText = formatTime(parseInt(timerSelect.value)); });

startExecutionBtn.addEventListener('click', () => {
    initAudio();
    const vName = victimInput.value.trim();
    if(vName === "") { alert("⚠️ Enter the VICTIM'S NAME before starting the execution!"); victimInput.focus(); return; }
    
    document.getElementById('current-clue').innerText = currentClue;
    document.getElementById('display-player').innerText = vName;
    
    startExecutionBtn.classList.add('hidden-btn'); restartLevelBtn.classList.remove('hidden-btn');
    isLevelStarted = true; buildKeyboard(false); 
    
    wordDisplay.innerHTML = "";
    for(let char of currentWord) {
        const box = document.createElement('div'); box.classList.add('letter-box');
        wordDisplay.appendChild(box);
    }

    timeRemaining = parseInt(timerSelect.value); timerDisplay.innerText = formatTime(timeRemaining);
    timerInterval = setInterval(updateTimer, 1000);
});

restartLevelBtn.addEventListener('click', () => prepareLevel(currentLevelIndex));

function updateTimer() {
    if (!isLevelStarted) return;
    timeRemaining--; timerDisplay.innerText = formatTime(timeRemaining);
    
    // HEARTBEAT LAST 10 SECONDS
    if (timeRemaining <= 10 && timeRemaining > 0) {
        timerDisplay.classList.add('panic');
        sounds.heartbeat();
    }
    
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

window.addEventListener('keydown', (e) => { if (!isLevelStarted) return; const char = e.key.toUpperCase(); if (char >= 'A' && char <= 'Z' && char.length === 1) handleGuess(char); });

function handleLevelWin() {
    isLevelStarted = false; clearInterval(timerInterval); timerDisplay.classList.remove('panic');
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

document.getElementById('next-level-btn').addEventListener('click', () => { document.getElementById('unlock-modal').classList.remove('show'); if (currentLevelIndex + 1 < levelsData.length) prepareLevel(currentLevelIndex + 1); else { renderLevelGrid(); showScreen('levelSelect'); } });
document.querySelectorAll('.modal-next-btn').forEach(b => b.addEventListener('click', () => { document.getElementById('win-modal').classList.remove('show'); let nextLvl = levelsData[currentLevelIndex + 1]; if (nextLvl && totalPoints >= nextLvl.unlockPts) prepareLevel(currentLevelIndex + 1); else { renderLevelGrid(); showScreen('levelSelect'); } }));

function triggerDeath() {
    isLevelStarted = false; clearInterval(timerInterval); timerDisplay.classList.remove('panic');
    sounds.extremeJumpscare(); 
    
    const jumpscare = document.getElementById('jumpscare'); jumpscare.classList.remove('hidden');
    setTimeout(() => { 
        jumpscare.classList.add('hidden'); 
        document.querySelectorAll('.draw-part').forEach(p => p.classList.add('visible')); 
        document.getElementById('lose-word').innerText = currentWord; 
        document.getElementById('lose-modal').classList.add('show'); 
    }, 1400);
}

document.getElementById('hint-btn').addEventListener('click', () => {
    if (!isLevelStarted) return; if (hintsUsed >= 1) { alert("⚠️ No more hints for you."); return; }
    let unGuessed = currentWord.split('').filter(c => !guessedLetters.has(c));
    if (unGuessed.length > 0) { totalPoints = Math.max(0, totalPoints - 2); saveProgress(); hintsUsed++; hintBtn.innerText = "👁️ Hint Used"; handleGuess(unGuessed[0]); }
});
document.getElementById('give-up-btn').addEventListener('click', () => { if (isLevelStarted) triggerDeath(); });

// ==========================================
// 5. BACKGROUND PARTICLES 
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