<template>
  <div id="app">
    <header>
      <h1>{{ courseName }}</h1>
      <h4>by {{ courseAuthor }}</h4>
      <p>TabComponent age: {{ age }}</p>
    </header>
    <h3>My Vue JS learning so far...</h3>
    <button @click="toggleTab('completed-section')" class="tab-button ">
      Completed
    </button>
    <button @click="toggleTab('left-section')" class="tab-button ">Left</button>
    <keep-alive>
      <component
        :is="isActive"
        class="tab"
        :topics="isActive == 'completed-section' ? completedTopics : leftTopics"
        @add-topic="addNewSection"
        @delete-topic="deleteSection($event)"
        :age="age"
        ><template #deleteMsg>
          <h3 v-if="leftTopics.length">Click on the topic to remove.</h3>
        </template></component
      >
    </keep-alive>
  </div>
</template>

<script>
import CompletedSection from "./completedSection.vue";
import LeftSection from "./leftSection.vue";
//import { eventBus } from "../main";

export default {
  name: "App",
  components: {
    CompletedSection,
    LeftSection,
  },
  data() {
    return {
      isActive: "completed-section",
      age: 21,
      completedTopics: [
        "Introduction to Vue",
        "Vue Instance",
        "Components",
        "Props",
        "Slots",
      ],
      leftTopics: ["Routing", "State-management", "Component Life-cycle"],
    };
  },
  methods: {
    toggleTab: function(tabID) {
      if (this.isActive !== tabID) {
        this.isActive = tabID;
      }
    },

    addNewSection: function(newTopic) {
      this.completedTopics.push(newTopic);
    },

    deleteSection: function(index) {
      this.$delete(this.leftTopics, index);
    },
  },
  inject: ["courseName", "courseAuthor"],
  //   created: function() {
  //     eventBus.$on("age-was-changed", (ageData) => {
  //       this.age = ageData;
  //     });
  //   },
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: 0px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  padding: 10px;
}
li {
  margin-top: 10px;
  list-style: none;
  padding: 8px 10px;
  border-radius: 20px;
  background: #e0e0e0;
}
header {
  padding: 20px 0;
  background: #2c3e50;
  color: white;
}
</style>
