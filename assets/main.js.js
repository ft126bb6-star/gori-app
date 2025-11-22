// --- ゲーム変数 ---
let muscle = 0;
const maxMuscle = 30;

const LEVEL2 = 10; // LV2になる境目
const LEVEL3 = 20; // LV3(MAX) の境目

let crocoAppeared = false;
let rabbitAppeared = false;

// --- DOM取得 ---
const muscleValueEl = document.getElementById('muscle-value');
const muscleBarEl   = document.getElementById('muscle-bar');
const messageEl     = document.getElementById('message');
const levelTextEl   = document.getElementById('level-text');

const takeshiImgEl  = document.getElementById('takeshi-img');
const crocoImgEl    = document.getElementById('rival-croco');
const rabbitImgEl   = document.getElementById('rival-rabbit');

const bananaBtn = document.getElementById('banana-btn');
const resetBtn  = document.getElementById('reset-btn');

// --- UI更新 ---
function updateUI() {

  // ゲージ数値
  muscleValueEl.textContent = `${muscle} / ${maxMuscle}`;
  muscleBarEl.style.width = (muscle / maxMuscle) * 100 + "%";

  // --- たけしの3段階進化 ---
  if (muscle >= LEVEL3) {
    takeshiImgEl.src = "c:/Users/yamad/OneDrive/Desktop/GORI-APP/assets/img/takeshi_lv3.png.PNG";
    levelTextEl.textContent = "たけし LV3（MAX）";

  } else if (muscle >= LEVEL2) {
    takeshiImgEl.src = "c:/Users/yamad/OneDrive/Desktop/GORI-APP/assets/img/takeshi_lv2.png.PNG";
    levelTextEl.textContent = "たけし LV2";

  } else {
    takeshiImgEl.src = "c:/Users/yamad/OneDrive/Desktop/GORI-APP/assets/img/takeshi_lv1.png.PNG";
    levelTextEl.textContent = "たけし LV1";
  }

  // --- クロコ登場（10以上） ---
  if (muscle >= 10 && !crocoAppeared) {
    crocoAppeared = true;
    crocoImgEl.classList.remove("hidden");
    messageEl.textContent = "クロコデビル卿「ふん…あたいのマッスルを超えられると思ってるのかえ？」";
  }

  // --- スーパーラビット登場（20以上） ---
  if (muscle >= 20 && !rabbitAppeared) {
    rabbitAppeared = true;
    rabbitImgEl.classList.remove("hidden");
    messageEl.textContent = "スーパーラビット「闇の跳躍力、見せてやろうか？」";
  }

  if (muscle >= maxMuscle) {
    messageEl.textContent = "LV3 MAXマッスル達成!!🔥🔥🔥";
  }
}

// --- バナナボタン ---
bananaBtn.addEventListener("click", () => {
  if (muscle >= maxMuscle) return;

  muscle++;

  if (!crocoAppeared) {
    messageEl.textContent = "たけし「バナナ、うめぇ〜〜！」";
  } else if (crocoAppeared && !rabbitAppeared) {
    messageEl.textContent = "たけし「クロコには負けねぇ！」";
  } else if (rabbitAppeared) {
    messageEl.textContent = "スーパーラビット「その程度？」";
  }

  updateUI();
});

// --- リセット ---
resetBtn.addEventListener("click", () => {
  muscle = 0;
  crocoAppeared = false;
  rabbitAppeared = false;

  crocoImgEl.classList.add("hidden");
  rabbitImgEl.classList.add("hidden");

  messageEl.textContent = "バナナを食べさせてマッスルアップだ！";

  updateUI();
});

// 初期表示
updateUI();
