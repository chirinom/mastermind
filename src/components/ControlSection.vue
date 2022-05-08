<template>
  <div class="control-wrapper">
    <button class="btn start-game" @click="createNewGame">Start new game</button>
    <button class="btn check-answer" @click="createNewGuess" disabled="true">Check Answer</button>
    <span :class="['label', gameStatus]">{{gameStatus}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FeedbackSection',
  computed: {
    ...mapGetters(['gameStatus', 'currentGuess'])
  },
  methods: {
    ...mapActions(['createNewGuess', 'createNewGame'])
  }
}
</script>

<style lang="scss" scoped>
.control-wrapper {
  max-width: 177px;
}
.btn {
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  min-width: 122px;

  &:disabled {
    cursor: not-allowed;
    color: #efefef!important;
  }

  &.start-game {
    color: grey;
    &:hover {
      color: black;
    }
  }
  &.check-answer {
    color: lightblue;
    &:hover{
      color: rgb(54, 169, 207);
    }
  }

}
.label {
  font-weight: bold;
  font-size: 34px;
  margin: 30px 0;

  &.won {
    color: rgb(54, 169, 207);
  }
  &.lost {
    color: rgb(195, 4, 4);
  }
}
</style>
