<template>
  <router-view />
</template>
<script>
export default {
  name: "app",
  mounted() {
    this.$api.get("ping").then();
    if (!this.$store.state.token) {
      this.$router.push("login");
    } else {
      this.$api(`members/${this.$store.state.member.id}/signedin`)
        .then(this.demarrer)
        .catch(this.seConnecter);
    }
  },

  methods: {
    ready() {
      this.$store.commit("setReady", true);
    },
    demarrer() {
      this.$api.get("members").then((response) => {
        //TODO: à modifier avec les mutations
        this.$store.commit("setMembers", response.data);
        this.ready();
      });
    },
    seConnecter() {
      this.$commit("setToken", false);
      //TODO: à modifier avec les mutations
      this.$router.push("/connexion");
      this.ready();
    },
  },
};
</script>

<style>
html {
  background-color: rgb(24, 26, 27);
}

h4.title {
  color: rgb(198, 193, 185);
}

body {
  height: 100%;
  background-color: #5a5f64;
  color: rgb(185, 179, 170)
}

.box, .card {

  background-color: rgb(24, 26, 27);
}

p, span, time, label.label, div.card-content, p.title, p.subtitle, .box {
  color: rgb(185, 179, 170)
}

.input {
  color: wheat;
  background-color: rgb(24, 26, 27);
}

</style>
