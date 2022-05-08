<template>
<div class="wrapper">
  <ColorsBar class="colors-bar" />
  <ColorInputButtons />
  <ControlSection />
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
.wrapper {
  display: flex;
  & .colors-bar {
    padding: 30px 0;
  }
}
</style>
