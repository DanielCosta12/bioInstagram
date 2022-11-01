<template>
  <section>
    <ul>
      <a href="" target="_blank"
        ><li><i class="fa-brands fa-linkedin fa-1x"></i> - Linkedin</li></a
      >
      <a href="" target="_blank"
        ><li><i class="fa-solid fa-envelope fa-1x"></i> - Gmail</li></a
      >
      <a href="" target="_blank"
        ><li><i class="fa-brands fa-github fa-1x"></i> - Github</li></a
      >

      <a href="" target="_blank"
        ><li><i class="fa-brands fa-discord fa-1x"></i> - Discord</li></a
      >
      <a href="" target="_blank"
        ><li><i class="fa-brands fa-twitter fa-1x"></i> - Twitter</li></a
      >
      <li v-for="link in links" v-bind:key="link">
        {{ link }}
      </li>
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
    };
  },
};
</script>
