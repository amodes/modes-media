<template>
  <div class="overlay" v-if="showPopup && !popupDismissed">
    <div class="popup-bottom-section popup-bottom-position">
      <div v-if="!gameStarted">
        Play a game?
        <div class="button-container">
          <button class="button action-button" @click="hideAndEndGame()">
            No
          </button>
          <button class="button action-button" @click="startGame()">Yes</button>
        </div>
      </div>
      <div v-else>
        <button class="button" @click="hideAndEndGame()">
          Stop!
        </button>
      </div>
    </div>
    <div v-if="gameStarted" class="game">
      <div class="countdown" v-if="countdown > 0">
        Find and click on the animals to save them! Game starts in
        {{ countdown }}
      </div>
      <Game v-else :onClose="hideAndEndGame" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "./Game.vue";

const TIME_UNTIL_POPUP = 30;
const START_GAME_TEXT = "birdsarecool";

interface StartGameData {
  activeTime: number;
  countdown: number;
  gameStarted: boolean;
  showPopup: boolean;
  popupDismissed: boolean;
  userEnteredText: string;
}

export default defineComponent({
  name: "StartGamePopup",
  components: { Game },
  data(): StartGameData {
    return {
      activeTime: 0,
      countdown: 5,
      gameStarted: false,
      showPopup: false,
      popupDismissed: false,
      userEnteredText: "",
    };
  },
  methods: {
    startTimer() {
      setInterval(this.increaseTime, 1000);
    },
    increaseTime() {
      this.activeTime++;
      if (this.activeTime > TIME_UNTIL_POPUP) {
        this.showPopup = true;
      }
    },
    startGame() {
      this.countdown = 5;
      this.gameStarted = true;
    },
    reduceTime() {
      if (this.countdown > 0) {
        this.countdown -= 1;
      }
    },
    hideAndEndGame() {
      this.showPopup = false;
      this.popupDismissed = true;
      this.gameStarted = false;
      this.userEnteredText = "";
    },
    handleUserEnteredText() {
      window.addEventListener("keydown", (e) => {
        this.userEnteredText += e.key;
        if (this.userEnteredText.includes(START_GAME_TEXT)) {
          this.showPopup = true;
          this.popupDismissed = false;
        }
      });
    },
  },
  mounted() {
    this.startTimer();
    this.handleUserEnteredText();
    setInterval(this.reduceTime, 1000);
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  color: #000;
  z-index:5;
}

.popup-bottom-section {
  border-radius: 4px;
  padding: 10px;
  bottom: 20px;
  position: absolute;
  background-color: #e4e7ed;
  box-shadow: 1px 0px 8px 1px rgba(0, 0, 0, 0.07);
  z-index: 12;
}

@media (max-width: 800px) {
  .popup-bottom-position {
    right: 10px;
    font-size: 12px;
  }
}

@media (min-width: 800px) {
  .popup-bottom-position {
    right: 20px;
    font-size: 12px;
  }
}

.action-button {
  margin-top: 10px;
  width: 30px;
}

.button {
  pointer-events: auto;
  padding: 5px;
  background-color: #abab;
  border-radius: 4px;
}

.button:hover {
  background-color: rgba(117, 128, 117, 0.673);
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.game {
  pointer-events: auto;
}

.countdown {
  background-color: #000;
  color: white;
  padding: 5px;
}
</style>
