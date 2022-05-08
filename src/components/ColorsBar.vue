<template>
  <div class="colors-bar">
    <ColorsBarList :options="availableColors"/>
  </div>
</template>

<script>
import ColorsBarList from './ColorsBarList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ColorsBar',
  components: {
    ColorsBarList
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
