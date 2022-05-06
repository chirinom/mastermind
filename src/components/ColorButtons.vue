<template>
  <div class="colors-container">
    <button
      v-for="(color, index) in availableColors" :key="index"
      @click="setCurrentColor($event.target.value)"
      :class="`btn color-btn__` + color"
      :value="color"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ColorButtons',
  props: {},
  computed: {
    ...mapGetters(['availableColors', 'currentGuess'])
  },
  methods: {
    ...mapMutations(['setCurrentColor'])
  }
}
</script>

<style lang="scss" scoped>
.colors-container {
  display: grid;
  justify-content: left;
}
.btn {
  margin: 12px;
  width: 30px;
  height: 30px;
  background: red;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px 5px lightgrey;
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
}

@media screen and (max-width: 580px) {

}
</style>
