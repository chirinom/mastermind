<template>
  <div class="feedback">
    <div
      v-for="(color, index) in transformedFeedback"
      :key="index"
      :class="['peg', color]"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackPegs',
  props: {
    whitePegs: {
      type: Number
    },
    blackPegs: {
      type: Number
    }
  },
  computed: {
    transformedFeedback () {
      const allPegs = []
      for (let i = 0; i < this.whitePegs; i++) { allPegs.push('white') }
      for (let i = 0; i < this.blackPegs; i++) { allPegs.push('black') }
      const num = 4 - allPegs.length
      for (let i = 0; i < num; i++) { allPegs.push('empty') }
      return allPegs
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
  padding: 11px
}

.peg {
  width: 10px;
  height: 10px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  border: none;
  margin: 1px;

  &.black {
    background-color: black;
  }
  &.white {
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: gray;
  }
  &.empty {
    background-color: lightgray;
  }
}
</style>
