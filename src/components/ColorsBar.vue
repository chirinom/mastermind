<template>
  <ColorButtons :options="availableColors"/>
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
