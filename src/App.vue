<script setup>
import Top from "./components/Top.vue";
import SectionMain from "./components/SectionMain.vue";
import Button from "./components/Button.vue";

components: {
  Top, SectionMain, Button;
}
</script>

<template>
  <Button />
  <Top />
  <SectionMain />
</template>
