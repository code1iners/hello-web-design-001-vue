<template>
  <div class="bg"></div>
  <div v-if="headerMenuShowing">
    asdf
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["headerMenuShowing"]),
  },
};
</script>

<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url("../assets/photos/bg_main_001.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
