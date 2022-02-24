<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-7-tablet is-6-desktop is-5-widescreen">
            <h4 class="title is-4 has-text-centered">Editer Conversation</h4>
            <form class="box" @submit.prevent="editerConversation">
              <div class="field">
                <label class="label">Sujet</label>
                <div class="control">
                  <input class="input" v-model="conversation.topic" />
                </div>
              </div>
              <div class="field">
                <label class="label">Label</label>
                <div class="control">
                  <input class="input" v-model="conversation.label" />
                </div>
              </div>
              <div class="buttons">
                <button class="button is-info is-outlined">Valider</button>
                <router-link class="button is-outlined" to="/"
                  >Annuler</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      conversation_id: this.$route.params.id,
      conversation: {
        label: "",
        topic: "",
      },
    };
  },

  mounted() {
    // Récupérer channel
    this.$api.get(`channels/${this.conversation_id}`).then((response) => {
      this.conversation.label = response.data.label;
      this.conversation.topic = response.data.topic;
    });
  },

  methods: {
    // Envoie la modification à l'api, revient à la page des conversations
    editerConversation() {
      this.$api
        .put(`channels/${this.conversation_id}`, this.conversation)
        .then(() => {
          this.$router.push("/");

          this.flashMessage.success({
            status: "success",
            title: "Channel " + this.conversation.topic + " has been modified",
            time: 1500,
          });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
<style scoped>
</style>