<template>
  <div>
    <h3>Left Sections in Vue</h3>
    <ul>
      <li
        v-for="(topic, index) in topics"
        :key="topic"
        @click="$emit('delete-topic', index)"
      >
        {{ topic }}
      </li>
    </ul>
    <template>
      <slot name="deleteMsg"></slot>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["topics", "age"],
};
</script>

<style lang="scss" scoped></style>
