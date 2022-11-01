<template>
  <section>
    <ul>
      <a :href="link" v-for="link in links" v-bind:key="link">
        <li v-for="nameLink in nameLinks" v-bind:key="nameLink">
          {{ nameLink }}
        </li>
      </a>
    </ul>
  </section>
</template>
<script>
export default {
  name: "SectionMain",
  data() {
    return {
      links: [
        "https://www.linkedin.com/in/daniel-costa12/",
        "mailto:danieldossantosdacosta@gmail.com",
        "https://github.com/DanielCosta12",
        "https://discord.com/users/dan#8150",
        "https://twitter.com/_danielcosta12",
      ],
      nameLinks: ["Linkedin", "Gmail", "Github", "Discord", "Twitter"],
    };
  },
};
</script>
