<template>
  <div>
    <button @click="createNewGuess">Check Answer</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FeedbackSection',
  methods: {
    ...mapActions(['createNewGuess'])
  }
}
</script>

<style lang="scss" scoped>
</style>
