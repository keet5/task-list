<template>
  <form class="creator" @submit.prevent="createTask">
    <div class="creator__input">
      <input type="text" v-model="text" />
    </div>
    <input
      class="creator__button"
      type="submit"
      value="add"
      :disabled="!text.length"
    />
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Creator',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    ...mapMutations(['addTask']),
    createTask() {
      this.addTask({ text: this.text, done: false })
      this.text = ''
    },
  },
}
</script>

<style scoped>
.creator {
  position: sticky;
  top: 0;
  display: grid;
  grid-template: 60px / 1fr 100px;
  box-sizing: border-box;
}

.creator__input {
  border-radius: 0 0 0 var(--fillet-radius);
  overflow: hidden;
}

.creator__input input {
  width: 100%;
  font-size: 150%;
  border: none;
  height: 100%;
  border-radius: 0;
  padding: 10px;
}

.creator__button {
  border-radius: 0 0 var(--fillet-radius) 0;
  border: none;
}

.creator__button:hover {
  background-color: lightgrey;
}
</style>
