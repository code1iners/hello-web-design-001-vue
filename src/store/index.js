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
    handleHeaderMenuClicked(state) {
      state.headerMenuShowing = !state.headerMenuShowing;
    },
  },
  actions: {},
  modules: {},
});
