<template>
  <div>
    <p>SiblingComponent age: {{ age }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["age"],
  created: function() {
    eventBus.$on("age-was-changed", (ageData) => {
      this.age = ageData;
    });
  },
};
</script>

<style lang="scss" scoped></style>
