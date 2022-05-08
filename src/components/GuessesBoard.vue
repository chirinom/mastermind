<template>
  <div v-if="completeSlotsList.length" class="board-wrapper">
    <div
      v-for="(guess, index) in completeSlotsList"
      :key="index"
      class="colors-guess"
    >
      <Button
        v-for="(color, index) in guess.code"
        :key="index"
        :color="color"
        :disabled="guess.disabled"
        @click="handleInput(index)"
      />
      <FeedbackPegs
        :blackPegs="guess.black_pegs"
        :whitePegs="guess.white_pegs"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FeedbackPegs from './FeedbackPegs.vue'
import Button from './Button.vue'

export default {
  name: 'GuessesBoard',
  components: {
    FeedbackPegs,
    Button
  },
  computed: {
    ...mapGetters([
      'completeSlotsList',
      'currentColor'
    ])
  },
  methods: {
    ...mapActions(['handleInputChange']),
    handleInput (index) {
      const body = {
        index: index,
        color: this.currentColor
      }
      this.handleInputChange(body)
    }
  }
}
</script>

<style lang="scss" scoped>
.board-wrapper {
  padding: 30px 40px;
  background-color: white;
  border-radius: 4px;
  min-width: 342px;
}
.colors-guess {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 580px) {
  .board-wrapper {
    width: 100%!important;
    padding: 0;
    min-width: none;
  }
}
</style>
