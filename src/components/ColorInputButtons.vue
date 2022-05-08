<template>
  <div class="colors-container">
    <div
      v-for="(guess, index) in completeSlotsList"
      :key="guess + '-' + index"
      class="colors-guess"
    >
      <button
        v-for="(color, index) in guess.code" :key="color + '-' + index"
        :class="`btn color-btn__` + color"
        :disabled="guess.disabled"
        @click="handleInput(index)"
      >
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorInputButtons',
  computed: {
    ...mapGetters(['completeSlotsList', 'currentColor'])
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
