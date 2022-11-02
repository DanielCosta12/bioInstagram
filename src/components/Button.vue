<template>
  <button id="btn" @click="mode()">🌚</button>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {
    mode() {
      const btn = document.querySelector("#btn");
      const element = document.body;
      element.classList.toggle("dark-mode");
      const text = document.querySelector("button");
      text.textContent = text.textContent === "🌞" ? "🌚" : "🌞";
    },
  },
};
</script>
