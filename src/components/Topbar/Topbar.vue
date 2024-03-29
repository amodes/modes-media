<template>
  <div class="topbar-container">
    <h1 class="name" @click="handleMenuClick('/')">Alexander Modes</h1>
    <div v-if="isMobile">
      <HamburgerButton @click="showMenu()" />
      <div class="menu" v-if="menuOpen">
        <div class="close-button" @click="onHideMenu()">X</div>
        <Navigation
          :activePage="activePage"
          v-on:on-menu-click="handleMenuClick"
        />
      </div>
    </div>
    <div v-else class="right-side-container">
      <Navigation
        :activeItem="activePage"
        v-on:on-menu-click="handleMenuClick"
      />
      <SocialMedia />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialMedia from "./SocialMedia.vue";
import HamburgerButton from "./HamburgerButton.vue";
import Navigation from "./Navigation.vue";

export default defineComponent({
  name: "Topbar",
  components: { SocialMedia, HamburgerButton, Navigation },
  data() {
    return {
      isMobile: window.innerWidth < 800,
      menuOpen: false,
      activePage: window.location.pathname,
    };
  },
  created() {
    this.activePage = window.location.hash.substring(1);
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
    showMenu() {
      document.querySelector("body").style.overflowY = "hidden";
      this.menuOpen = true;
    },
    onHideMenu() {
      document.querySelector("body").style.overflowY = "auto";
      this.menuOpen = false;
    },
    handleMenuClick(item: string) {
      this.activePage = item;
      this.onHideMenu();
      this.$router.push(item);
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroy() {
    window.removeEventListener("resize", this.onResize);
  },
});
</script>

<style scoped>
.topbar-container {
  overflow-x: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.menu {
  z-index: 20;
  padding: 30px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 120%;
  background-color: #f0d8a6;
  box-sizing: border-box;
  animation: moveBus 0.6s ease-in;
}

@keyframes moveBus {
  0% {
    left: 100%;
  }
  50% {
    left: 0%;
  }
}

.close-button {
  width: 100%;
  display: flex;
  font-size: 25px;
  justify-content: flex-end;
}

@media (min-width: 800px) {
  .topbar-container {
    padding: 20px 0 20px 22.5%;
    width: 77.5%;
    align-items: center;
  }
}

.name {
  cursor: pointer;
  width: 60px;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 500;
  border-radius: 2px;
  padding: 0;
  margin:0;
}

.right-side-container {
  display: flex;
}
</style>
