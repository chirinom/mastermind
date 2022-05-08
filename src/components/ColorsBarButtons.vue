<template>
  <div class="bar-container">
    <div class="current-color">
      <span class="label">Current Color</span>
      <Button :color="currentColor" :disabled="true"/>
    </div>
    <Button
      v-for="(color, index) in availableColors" :key="index"
      @click="setCurrentColor(color)"
      :color="color"
      :disabled="false"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Button from './Button.vue'

export default {
  name: 'ColorsBarButtons',
  components: {
    Button
  },
  computed: {
    ...mapGetters(['availableColors', 'currentColor'])
  },
  methods: {
    ...mapMutations(['setCurrentColor'])
  }
}
</script>

<style lang="scss" scoped>
.bar-container {
  max-width: 77px;
  padding: 0 15px 0 0;

  & .current-color {
    border-style: solid;
    border-width: 1px;
    border-color: lightgray;
    border-radius: 4px;
    padding: 2px;
    cursor: not-allowed;

    & button {
      cursor: not-allowed;
    }
    & .label {
      font-size: 12px;
      font-weight: bold;
    }
  }
}
@media screen and (max-width: 580px) {
  .bar-container {
    padding: 0;
    max-width: none;
    width: 100%;
  }
}
</style>
