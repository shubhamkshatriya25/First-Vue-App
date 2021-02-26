<template>
  <div>
    <hr />
    <h4>Mixin Example</h4>
    <!-- <h1>{{ level }}</h1> -->
  </div>
</template>

<script>
var mixin = {
  created: function() {
    console.log("Mixin Created");
  },
  methods: {
    greeting: function() {
      console.log("Greetings from Mixin...");
    },
  },
};
export default {
  props: ["level"],
  mixins: [mixin],
  methods: {
    greeting: function() {
      console.log("Greetings from Component...");
    },
  },
};
</script>
