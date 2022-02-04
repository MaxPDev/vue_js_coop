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
body {
  height: 100%;
  background-color: #5a5f64;
}
</style>
