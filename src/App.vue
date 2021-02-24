<template>
  <div id="app">
    <tab-component></tab-component>
    <hr />
    <sibling-component :age="21"></sibling-component>
  </div>
</template>

<script>
import TabComponent from "./components/tabComponent.vue";
import SiblingComponent from "./components/SiblingComponent.vue";
export default {
  name: "App",
  components: {
    TabComponent,
    SiblingComponent,
  },
  provide: {
    courseName: "Vue JS: The Complete Guide",
    courseAuthor: "Max Schwazmuller",
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
</style>
