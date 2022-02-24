<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-7-tablet is-6-desktop is-5-widescreen">
            <h4 class="title is-4 has-text-centered">Mes conversations</h4>
            <template v-for="conversation in conversations">
              <conversation
                class="box"
                :key="conversation.id"
                :conversation="conversation"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <!--Flash message (alert) -->
    <FlashMessage></FlashMessage>
  </section>
</template>
<script>
import Conversation from "../components/Conversation.vue";
// import Header from '../components/Header.vue';

export default {
  components: {
    // Header,
    Conversation,
  },
  data() {
    return {
      conversations: [],
    };
  },

  mounted() {
    this.$api.get("channels").then((response) => {
      this.conversations = response.data;
    });

    this.$bus.$on("delete-conversation", (topic) => {
      
      console.log(topic);
      this.getChannels();
      console.log(this.messages);
    });
  },

  methods: {
    getChannels() {
      this.$api
        .get(`channels`)
        .then((response) => {
          // .data !!!!!!!!
          this.conversations = response.data;
        });
    },
  },
};
</script>
<style scoped>
</style>











  <!-- <div class="hero-body">
    <div class="container">
        <h1 class="title">Listes des conversations</h1>
          <div>
            <h4 class="title is-4">Bonjour {{ $store.state.member.fullname }}</h4>
          </div>
          <button><router-link to="createConversation">Créer une conversation</router-link></button>
          <div v-for="conversation in conversations">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    Titre : {{conversation.label}}
                    Sujet : {{conversation.topic}}
                  </div>
                </div>
              </div>
           </div>
       </div>
  </div> -->