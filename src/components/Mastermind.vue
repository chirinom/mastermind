<template>
  <div class="mastermind">
    <h1>Mastermind</h1>
    <div class="wrapper">
      <ColorsBar />
      <ColorInputButtons />
      <ControlSection />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters(['id'])
  },
  methods: {
    ...mapActions(['getGame'])
  },
  mounted () {
    if (this.id) {
      this.getGame(this.id)
    }
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
}
@media screen and (max-width: 950px) {
  .mastermind {
    padding: 0;
  }
}
@media screen and (max-width: 580px) {
  .mastermind {
    padding: 0;
  }
  .wrapper {
    display: block;
    padding: 0;
  }
}
</style>
