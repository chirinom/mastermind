<template>
<div class="wrapper">
  <ColorsBar class="colors-bar" />
  <div class="board">
    <ColorInputButtons />
  </div>
  <ControlSection />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import ColorsBar from './ColorsBar.vue'
import ColorInputButtons from './ColorInputButtons'
import ControlSection from './ControlSection.vue'

export default {
  name: 'Mastermind',
  components: {
    ColorsBar,
    ColorInputButtons,
    ControlSection
  },
  data () {
    return {
      newGameBody: {
        num_colors: 6,
        num_slots: 4,
        max_guesses: 10 // Optional
      }
    }
  },
  methods: {
    ...mapActions(['getGame'])
  },
  mounted () {
    this.getGame(8)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  & .colors-bar {
    padding: 30px 0;
  }
}
.board {
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  width: fit-content;
  background-color: white;
  border-radius: 4px;
}
</style>
