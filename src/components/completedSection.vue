<template>
  <div>
    <h3>Completed Sections in Vue</h3>
    <ul>
      <li v-for="topic in topics" :key="topic">{{ topic }}</li>
    </ul>
    <br />
    <br />
    <input
      type="text"
      v-model="enteredValue"
      placeholder="Enter a completed course"
    />
    <br />
    <button @click="$emit('add-topic', enteredValue)" class="tab-button">
      Add
    </button>
    <br /><br />
    <hr />
    <p>CompletedSection age: {{ age }}</p>
    <button @click="increaseAge">Increase Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      enteredValue: "",
    };
  },
  props: ["topics", "age"],
  methods: {
    increaseAge: function() {
      this.age += 1;
      eventBus.$emit("age-was-changed", this.age);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px 20px;
  margin-bottom: 10px;
}
</style>
