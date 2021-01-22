import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {},
    id: 0,
    dragMode: false,
    dropHover: false,
    dropFieldTop: null,
  },
  mutations: {
    addTask(state, { text, done }) {
      state.tasks[state.id++] = { text, done }
    },
    deleteTask(state, id) {
      delete state.tasks[id]
    },
    dragModeToggle(state) {
      state.dragMode = !state.dragMode
    },
    setDragMode(state) {
      state.dragMode = true
    },
    unsetDrag(state) {
      state.dragMode = false
    },
    dropHoverToggle(state) {
      state.dropHover = !state.dropHover
    },
    setDropHover(state) {
      state.dropHover = true
    },
    unsetDropHover(state) {
      state.dropHover = false
    },
    setDropFieldTop(state, value) {
      state.dropFieldTop = value
    },
  },
  actions: {},
  modules: {},
})
