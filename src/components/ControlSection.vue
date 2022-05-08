<template>
  <div class="control-wrapper">
    <button class="check-answer" @click="createNewGuess">Check Answer</button>
    <span :class="['label', gameStatus]">{{gameStatus}}!</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FeedbackSection',
  computed: {
    ...mapGetters(['gameStatus'])
  },
  methods: {
    ...mapActions(['createNewGuess'])
  }
}
</script>

<style lang="scss" scoped>
.control-wrapper {
  max-width: 155px;
}
.check-answer {
  margin: 22px;
  border: none;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  color: lightblue;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &:hover{
    color: rgb(54, 169, 207);
  }
}
.label {
  font-weight: bold;
  font-size: 34px;
  &.won {
    color: rgb(54, 169, 207);
  }
  &.lost {
    color: rgb(195, 4, 4);
  }
}
</style>
