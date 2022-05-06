<template>
  <div class="wrapper">
    <ColorsBar />
    <ColorSlotsTable />
    <FeedbackSection />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ColorsBar from './ColorsBar.vue'
import ColorSlotsTable from './ColorSlotsTable.vue'
import FeedbackSection from './FeedbackSection.vue'

export default {
  name: 'Mastermind',
  components: {
    ColorsBar,
    ColorSlotsTable,
    FeedbackSection
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
    this.getGame(5)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>
