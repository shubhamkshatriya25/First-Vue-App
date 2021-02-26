import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

export const eventBus = new Vue();

Vue.use(VueRouter);

Vue.directive("customise", {
  // When the bound element is inserted into the DOM...
  bind: function(el, binding) {
    let delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

Vue.filter("uppercase", function(value) {
  if (!value) return "";

  return value.toString().toUpperCase();
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
