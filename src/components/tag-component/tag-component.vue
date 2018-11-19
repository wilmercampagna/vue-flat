<style lang="scss" src="./tag-component.style.scss" scoped></style>

<template>
  <div :class="['tag', options.size, options.color]">
    <span v-text="text"></span>
  </div>
</template>

<script>
export default {
  name: 'tag-component',
  props: {
    text: {
      type: String,
      required: true,
      default: 'default text'
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        size: 'is-medium',
        color: 'is-primary'
      })
    }
  }
}
</script>
