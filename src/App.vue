<template>
  <div id="header__nav">
    <div id="header__home">
      <img
        id="header__home-logo"
        src="../src/assets/icons/shark_001.png"
        alt="shark"
      />
      <span id="header__home-name">Codeliner</span>
    </div>
    <div id="header__nav-links" v-if="!headerMenuCollapsed">
      <router-link class="header__nav-link" to="/">Illustration</router-link>
      <router-link class="header__nav-link" to="/">Murals</router-link>
      <router-link class="header__nav-link" to="/">Doodle Therapy</router-link>
      <router-link class="header__nav-link" to="/">About</router-link>
      <router-link class="header__nav-link" to="/">Shop</router-link>
    </div>
    <div id="header__nav-menu" v-else>
      <img
        @click="toggleHeaderMenuShowing"
        src="../src/assets/icons/menu_hamburger_001.png"
        alt=""
      />
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.setMenuCollapseByWindowWidth(window.innerWidth);
  },
  methods: {
    handleResize(e) {
      const width = e.target.innerWidth;
      this.setMenuCollapseByWindowWidth(width);
    },
    setMenuCollapseByWindowWidth(width) {
      if (width < 660) {
        this.setHeaderMenuCollapsed(true);
      } else {
        this.disableHeaderMenuShowing();
        this.setHeaderMenuCollapsed(false);
      }
    },
    handleClickedMenu() {
      console.log("clicked");
    },
    ...mapMutations([
      "setHeaderMenuCollapsed",
      "toggleHeaderMenuShowing",
      "disableHeaderMenuShowing",
    ]),
  },
  computed: {
    ...mapState(["headerMenuCollapsed"]),
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0 !important;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* common start */

/* common end */

/* header start */
/* header nav start */
#header__nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 2px;
  /* position: fixed; */
  z-index: 1;
  background-color: white;
}
#header__home {
  display: flex;
  align-items: center;
  cursor: pointer;
}
#header__home > img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
#header__home > span {
  font-size: 1.3rem;
}

.header__nav-link {
  text-decoration: none;
  color: inherit;
  padding: 10px 20px;
  font-size: 0.8rem;
  transition: all, 0.3s ease-in-out;
}
.header__nav-link:hover {
  color: cadetblue;
  font-size: 0.9rem;
}
#header__nav-menu {
  display: flex;
  align-items: center;
}
#header__nav-menu img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
/* header nav end */
/* header end */

/* media start */
@media screen and (max-width: 660px) {
  #header__nav {
    display: flex;
    justify-content: center;
  }
}
/* media end */
</style>
