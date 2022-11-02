<template>
  <section>
    <div>
      <img class="pfp" src="../assets/pfpdc.png" alt="Foto de Perfil" />
      <br />
      <h1>{{ h1 }}</h1>
      <p>"{{ p }}" {{ donda }}</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      h1: "ne_danz",
      p: "The giant looks in the mirror and sees nothing",
      donda: " -Donda West",
    };
  },
};
</script>
