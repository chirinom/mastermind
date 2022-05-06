<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th title="Turn">Turn</th>
          <th title="Seq q">Seqances</th>
          <th title="Lost">Hint</th>
        </tr>
      </thead>
      <tbody>
        <ColorInputs />
      </tbody>
    </table>
  </div>
</template>

<script>
import ColorInputs from './ColorInputs.vue'

export default {
  name: 'ColorSlotsTable',
  components: {
    ColorInputs
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
