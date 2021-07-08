<template>
  <div class="contents">
    <div class="bg"></div>
    <div id="header__nav-menu__container" v-if="headerMenuShowing">
      <div>Sign Up</div>
      <div>Sign In</div>
      <div>About</div>
      <div>Use of Terms</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState({ headerMenuShowing: (state) => state.headerMenuShowing }),
  },
};
</script>

<style scoped>
.contents {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url("../assets/photos/bg_main_001.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#header__nav-menu__container {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background-color: #eee;
  transition: all 0.3s ease-in-out;
}
#header__nav-menu__container > div {
  justify-self: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
#header__nav-menu__container > div:hover {
  transform: scale(110%);
  font-weight: 600;
}
</style>
