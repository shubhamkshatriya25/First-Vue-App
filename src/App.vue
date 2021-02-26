<template>
  <div id="app">
    <tab-component></tab-component>
    <hr />
    <sibling-component :age="21"></sibling-component>
    <mixin-component :level="'2'"> </mixin-component>
  </div>
</template>

<script>
import TabComponent from "./components/tabComponent.vue";
import SiblingComponent from "./components/SiblingComponent.vue";
import MixinComponent from "./components/MixinComponent.vue";

export default {
  name: "App",
  components: {
    TabComponent,
    SiblingComponent,
    MixinComponent,
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
