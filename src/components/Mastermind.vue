<template>
  <div class="mastermind">
    <h1>Mastermind</h1>
    <div class="wrapper">
      <ColorsBar />
      <GuessesBoard />
      <ControlSection />
    </div>
  </div>
</template>

<script>
import ColorsBar from './ColorsBar.vue'
import GuessesBoard from './GuessesBoard.vue'
import ControlSection from './ControlSection.vue'

export default {
  name: 'Mastermind',
  components: {
    ColorsBar,
    GuessesBoard,
    ControlSection
  }
}
</script>

<style scoped lang="scss">
.mastermind {
  padding: 50px;
}
.wrapper {
  display: flex;
  padding: 20px 90px 90px;
  justify-content: center;
}
@media screen and (max-width: 950px) {
  .mastermind {
    padding: 0 8px;
    width: 100%;
  }
}
@media screen and (max-width: 580px) {
  .wrapper {
    display: block;
    padding: 0;
  }
}
</style>
