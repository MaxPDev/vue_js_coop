<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-7-tablet is-6-desktop is-5-widescreen">
            <h4 class="title is-4 has-text-centered">Mes conversations</h4>
            <template>
              <div v-for="conversation in conversations" :key="conversation.id">
                <!-- <router-link
                  :to="{
                    name: 'Conversation',
                    params: { id: conversation.id },
                  }"
                > -->
                  <conversation
                    class="box"
                    :key="conversation.id"
                    :conversation="conversation"
                  />
                <!-- </router-link> -->
              </div>
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
      this.$api.get(`channels`).then((response) => {
        this.conversations = response.data;
      });
    },
  },
};
</script>
<style scoped>
</style>
