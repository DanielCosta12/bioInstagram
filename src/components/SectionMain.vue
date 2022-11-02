<template>
  <section>
    <ul>
      <a :href="links[0]">
        <li>{{ nameLinks[0] }}</li>
      </a>
      <a :href="links[1]">
        <li>{{ nameLinks[1] }}</li>
      </a>
      <a :href="links[2]">
        <li>{{ nameLinks[2] }}</li>
      </a>
      <a :href="links[3]">
        <li>{{ nameLinks[3] }}</li>
      </a>
      <a :href="links[4]">
        <li>{{ nameLinks[4] }}</li>
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
