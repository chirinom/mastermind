<template>
  <div class="colors-container">
    <div
      v-for="(guess, index) in completeSlotsList"
      :key="index"
      class="colors-guess"
    >
      <button
        v-for="(color, index) in guess.code"
        :key="index"
        :class="`btn color-btn__` + color"
        :disabled="guess.disabled"
        @click="handleInput(index)"
      >
      </button>
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

export default {
  name: 'ColorInputButtons',
  components: {
    FeedbackPegs
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
.colors-container {
  padding: 30px 50px;
  background-color: white;
  border-radius: 4px;
}
.colors-guess {
  display: flex;
}
.btn {
  margin: 12px;
  width: 25px;
  height: 25px;
  background: red;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px 5px lightgrey;
  }
  &:disabled {
    cursor: not-allowed;
  }
}

.color-btn {

  &__red {
    background-color: red;
  }
  &__blue {
    background-color: blue;
  }
  &__green {
    background-color: green;
  }
  &__yellow {
    background-color: yellow;
  }
  &__orange {
    background-color: orange;
  }
  &__white {
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(197, 197, 197);
  }
  &__lightgrey {
    background-color: lightgray;
  }
  &__grey {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
