import { createStore } from "vuex";

export default createStore({
  state: {
    headerMenuCollapsed: false,
    headerMenuShowing: false,
  },
  mutations: {
    setHeaderMenuCollapsed(state, status) {
      state.headerMenuCollapsed = status;
    },
    toggleHeaderMenuShowing(state) {
      state.headerMenuShowing = !state.headerMenuShowing;
    },
    disableHeaderMenuShowing(state) {
      state.headerMenuShowing = false;
      console.log(state.headerMenuShowing);
    },
  },
  actions: {},
  modules: {},
});
