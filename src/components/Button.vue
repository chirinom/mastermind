<template>
  <button
    :class="`btn color-btn__` + color"
    :disabled="disabled"
    @click="emitClick()"
  />
</template>

<script>

export default {
  name: 'Button',
  props: {
    color: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin: 12px;
  width: 25px;
  height: 25px;
  background: red;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px 5px lightgrey;
  }
  &:disabled {
    cursor: not-allowed;
  }
}

.color-btn {

  &__red {
    background-color: red;
  }
  &__blue {
    background-color: blue;
  }
  &__green {
    background-color: green;
  }
  &__yellow {
    background-color: yellow;
  }
  &__orange {
    background-color: orange;
  }
  &__white {
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(197, 197, 197);
  }
  &__lightgrey {
    background-color: lightgray;
  }
  &__grey {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
