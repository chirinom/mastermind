<template>
  <div class="colors-bar">
    <ColorButtons :options="availableColors"/>
  </div>
</template>

<script>
import ColorButtons from './ColorsBarButtons.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ColorsBar',
  components: {
    ColorButtons
  },
  computed: {
    ...mapGetters(['availableColors'])
  }
}
</script>

<style lang="scss" scoped>
.colors-bar {
  padding: 30px 0;
}
@media screen and (max-width: 580px) {
  .colors-bar {
    padding: 0;
  }
}
</style>
