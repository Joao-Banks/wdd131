const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } else {
      alert("Character Died");
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

// DOM Elements
const elements = {
  image: document.querySelector(".image"),
  name: document.querySelector(".name"),
  class: document.getElementById("class"),
  level: document.getElementById("level"),
  health: document.getElementById("health"),
  log: document.getElementById("log"),
  attackedBtn: document.getElementById("attacked"),
  levelupBtn: document.getElementById("levelup")
};

// Update Card UI
const updateCard = () => {
  elements.image.src = character.image;
  elements.image.alt = character.name;
  elements.name.textContent = character.name;
  elements.class.textContent = character.class;
  elements.level.textContent = character.level;
  elements.health.textContent = character.health;
};

// Button Event Listeners
elements.attackedBtn.addEventListener("click", () => {
  character.attacked();
  elements.log.textContent = `${character.name} was attacked!`;
  updateCard();
});

elements.levelupBtn.addEventListener("click", () => {
  character.levelUp();
  elements.log.textContent = `${character.name} leveled up!`;
  updateCard();
});

// Initial Load
updateCard();
