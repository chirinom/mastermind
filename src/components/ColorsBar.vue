<template>
  <ColorButtons :options="availableColors"/>
</template>

<script>
import ColorButtons from './ColorButtons.vue'
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
